import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
  counter: number;
  addNumber(): void;
  subNumber(): void;
}

interface CounterProviderProps {
  children: ReactNode;
}

const CounterContext = createContext<ContextProps>({} as ContextProps);

export const useCounter = () => {
  const context = useContext(CounterContext);

  return context;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counter, setCounter] = useState<number>(0);

  const addNumber = (): void => {
    setCounter(counter + 1);
  };

  const subNumber = (): void => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, addNumber, subNumber }}>
      {children}
    </CounterContext.Provider>
  );
};
