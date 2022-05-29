import React, { useState, useEffect } from 'react';

function useLocalStorage(tokenKey, initialValue) {
  const getValue = () => {
    const storage = localStorage.getItem(tokenKey);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };
