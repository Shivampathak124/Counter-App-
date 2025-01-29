import React, { useState, useEffect } from "react";

import "./Counter.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, 98));
      }, 1100);
    }
    return () => clearInterval(interval);
  }, [autoIncrement]);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Counter App</h2>
        <div className="counter-value">{count}</div>
        <div className="button-group">
          <button
            className="btn blue"
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          >
            -
          </button>
          <button
            className="btn blue"
            onClick={() => setCount((prev) => Math.min(prev + 1, 98))}
          >
            +
          </button>
        </div>
        <button className="btn red" onClick={() => setCount(0)}>
          Reset
        </button>
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={autoIncrement}
              onChange={() => setAutoIncrement(!autoIncrement)}
            />
            <span className="slider"></span>
          </label>
          <span className="Auto-Increment">Auto Increment</span>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
