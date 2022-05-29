import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debValue;
}

export { useDebounce };
