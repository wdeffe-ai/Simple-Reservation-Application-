import roomRates from "../../database/room-rates.json";
import { calculateReservationRate } from "../utils/roomRates";

/**
 * API-facing service. The returned object is ready to send as JSON from an API
 * route or to store in a client-side API response state.
 */
export async function calculateReservationRateFromApi(reservation) {
  // When the JSON is served by an API, replace this import with fetch('/api/room-rates').
  return calculateReservationRate({ ratesData: roomRates, ...reservation });
}

export function createReservationRateResponse(reservation) {
  try {
    return {
      ok: true,
      data: calculateReservationRate({ ratesData: roomRates, ...reservation }),
      error: null
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error instanceof Error ? error.message : "Unable to calculate reservation rate."
    };
  }
}
