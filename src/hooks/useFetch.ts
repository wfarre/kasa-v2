import { useEffect, useState } from "react";

export const useFetch = (
  url: string
): [object[] | null, string | null, boolean] => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Something went wrong");
      })
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false);
          setData(data);
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return [data, error, isLoading];
};
