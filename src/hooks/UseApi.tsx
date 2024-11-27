/**
 * Our API hook
 */

import { useState, useEffect, useCallback } from "react";

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await fetch(url);
      const json = await response.json();

      // Check if the data is inside the `data` key
      const responseData = json?.data ?? json;
      setData(responseData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError, fetchData };
}
