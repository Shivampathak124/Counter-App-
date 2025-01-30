import { useState, useEffect } from "react";

const useCounterModel = () => {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    let interval;
    if (autoIncrement && count < 98) {
      interval = setInterval(() => {
        setCount((prev) => (prev < 98 ? prev + 1 : prev)); 
      }, 1100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [autoIncrement, count]);

  const increment = () => {
    if (count < 98) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
    setAutoIncrement(false);
  };

  const toggleAutoIncrement = () => {
    setAutoIncrement((prev) => !prev);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    autoIncrement,
    toggleAutoIncrement,
    isIncrementDisabled: count >= 98,
    isDecrementDisabled: count <= 0,
  };
};

export default useCounterModel;
