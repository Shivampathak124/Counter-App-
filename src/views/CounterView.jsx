import React from "react";
import CounterController from "../controllers/CounterController";
import "../styles.css"

const CounterView = () => {
  const {
    count,
    onIncrement,
    onDecrement,
    onReset,
    autoIncrement,
    onToggleAutoIncrement,
  } = CounterController();

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Counter App</h2>
        <p className="counter-value">Counter: {count}</p>

        <div className="button-group">
          <button className="btn blue" onClick={onIncrement}>
            +
          </button>
          <button className="btn light-blue" onClick={onDecrement}>
            -
          </button>
          <button className="btn reset" onClick={onReset}>
            RESET
          </button>
        </div>

        <div className="toggle-container">
          <label className="toggle-label">Auto Increment:</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={autoIncrement}
              onChange={onToggleAutoIncrement}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CounterView;
