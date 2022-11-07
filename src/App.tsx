import { useState } from "react";
import "./App.css";
import { useCounter } from "./contexts/Counter";

export const App = () => {
  const { counter, addNumber, subNumber } = useCounter();

  return (
    <div className="counter">
      <h1>{counter} </h1>
      <button onClick={addNumber}>+</button>
      <button onClick={subNumber}>-</button>
    </div>
  );
};
