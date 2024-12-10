/**
 * Our API hook
 */

import { useState, useEffect, useCallback } from "react";

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage("");

      const response = await fetch(url);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.errors?.[0]?.message || "Something went wrong.");
      }

      // Check if the data is inside the `data` key
      const responseData = json?.data ?? json;
      setData(responseData);
    } catch (error: any) {
      // console.error(error);
      setIsError(true);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError, errorMessage, fetchData };
}
