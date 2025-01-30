import useCounterModel from "../models/counterModel";
const CounterController = () => {
  const {
    count,
    increment,
    decrement,
    reset,
    autoIncrement,
    toggleAutoIncrement,
  } = useCounterModel();

  return {
    count,
    onIncrement: increment,
    onDecrement: decrement,
    onReset: reset,
    autoIncrement,
    onToggleAutoIncrement: toggleAutoIncrement,
  };
};

export default CounterController;
