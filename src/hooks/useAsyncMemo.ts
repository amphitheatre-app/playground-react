import { useEffect, useState } from "react";

export function useAsyncMemo<T>(effect: () => Promise<any>, deps: any[]): T {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if component is still mounted

    const fetchData = async () => {
      try {
        const result = await effect();
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // Dependency array to trigger re-fetch when deps change

  return data;
}
