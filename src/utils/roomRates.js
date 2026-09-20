function toLocalDate(value, fieldName) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`${fieldName} must be a valid date.`);
  }

  date.setHours(0, 0, 0, 0);
  return date;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function getSeason(dateValue) {
  const date = toLocalDate(dateValue, "arrivalDate");
  const month = date.getMonth() + 1;

  // Winter crosses the end of the calendar year: November-April.
  return month >= 11 || month <= 4 ? "winter" : "summer";
}

function getNights(arrivalDate, departureDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const nights = Math.round((departureDate - arrivalDate) / millisecondsPerDay);

  if (nights < 1) {
    throw new Error("departureDate must be after arrivalDate.");
  }

  return nights;
}

function getRateType(arrivalDate, nights) {
  const arrivalDay = arrivalDate.getDay();

  // Friday arrival: two nights departs Sunday; three nights departs Monday.
  if (arrivalDay === 5 && nights === 2) return "twoDayWeekend";
  if (arrivalDay === 5 && nights === 3) return "threeDayWeekend";

  return "daily";
}

function getCategoryKey(category, accompanyingAdultStatus) {
  const normalizedCategory = String(category).toLowerCase().replace(/[^a-z]/g, "");
  const normalizedAdultStatus = String(accompanyingAdultStatus || "").toLowerCase().replace(/[^a-z]/g, "");

  if (normalizedCategory === "child") {
    if (["member", "juniormember"].includes(normalizedAdultStatus)) return "memberChild";
    if (["guest", "juniorguest"].includes(normalizedAdultStatus)) return "guestChild";
    throw new Error("A child must include an accompanyingAdultStatus of Member, Junior Member, Guest, or Junior Guest.");
  }

  const categoryMap = {
    member: "member",
    juniormember: "juniorMember",
    guest: "guest",
    juniorguest: "juniorGuest",
    memberchild: "memberChild",
    guestchild: "guestChild"
  };

  const categoryKey = categoryMap[normalizedCategory];
  if (!categoryKey) {
    throw new Error(`Unsupported occupant category: ${category}.`);
  }

  return categoryKey;
}

/**
 * Calculates a reservation using the nested database/room-rates.json structure.
 * Occupants use { category, quantity, accompanyingAdultStatus? }.
 */
export function calculateReservationRate({ ratesData, arrivalDate, departureDate, occupants }) {
  if (!ratesData || !ratesData.rates) throw new Error("ratesData must contain a rates object.");
  if (!Array.isArray(occupants) || occupants.length === 0) throw new Error("At least one occupant is required.");

  const arrival = toLocalDate(arrivalDate, "arrivalDate");
  const departure = toLocalDate(departureDate, "departureDate");
  const nights = getNights(arrival, departure);
  const season = getSeason(arrival);
  const seasonRates = ratesData.rates[season];
  const requestedRateType = season === "winter" ? getRateType(arrival, nights) : "daily";
  const rateType = seasonRates[requestedRateType] ? requestedRateType : "daily";
  const selectedRate = seasonRates[rateType];

  if (!selectedRate) throw new Error(`No ${rateType} rate is configured for ${season}.`);
  if (rateType !== "daily" && selectedRate.nights !== nights) {
    throw new Error("The selected weekend rate does not match the reservation length.");
  }

  const lineItems = occupants.map((occupant) => {
    const quantity = occupant.quantity === undefined ? 1 : Number(occupant.quantity);
    if (!Number.isInteger(quantity) || quantity < 1) throw new Error("Occupant quantity must be a positive whole number.");

    const category = getCategoryKey(occupant.category, occupant.accompanyingAdultStatus);
    const nightlyRate = selectedRate[category];
    if (typeof nightlyRate !== "number") throw new Error(`No ${category} rate is configured for ${season}/${rateType}.`);

    const amount = nightlyRate * nights * quantity;
    return { category, quantity, nightlyRate, nights, amount };
  });

  return {
    arrivalDate: formatDate(arrival),
    departureDate: formatDate(departure),
    nights,
    season,
    rateType,
    currency: ratesData.currency || "USD",
    lineItems,
    total: lineItems.reduce((sum, item) => sum + item.amount, 0)
  };
}

export { getSeason, getCategoryKey };
