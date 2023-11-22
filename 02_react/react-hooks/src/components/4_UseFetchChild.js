import { useState, useEffect } from "react";

// We have three states
// 1. If Data is not available but is loading
// 2. If Data is present
// 3. If there is error

export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); // Initially state of loading is TRUE
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { loading, data, error };
}
