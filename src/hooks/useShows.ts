import { useEffect, useState } from "react";
import { getShows } from "../api";
import { Show } from "../types";

export const useShows = (query: string) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await getShows(query);
        setShows(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return { shows, error, isLoading };
};
