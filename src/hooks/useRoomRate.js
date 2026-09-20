import { useCallback, useState } from "react";
import { calculateReservationRateFromApi } from "../services/roomRatesApi";

/**
 * React state hook for a reservation-rate form or reservation page.
 * Returns { rate, loading, error, calculateRate }.
 */
export function useRoomRate() {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateRate = useCallback(async (reservation) => {
    setLoading(true);
    setError(null);

    try {
      const result = await calculateReservationRateFromApi(reservation);
      setRate(result);
      return result;
    } catch (calculationError) {
      const message = calculationError instanceof Error
        ? calculationError.message
        : "Unable to calculate reservation rate.";
      setRate(null);
      setError(message);
      throw calculationError;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearRate = useCallback(() => {
    setRate(null);
    setError(null);
  }, []);

  return { rate, loading, error, calculateRate, clearRate };
}
