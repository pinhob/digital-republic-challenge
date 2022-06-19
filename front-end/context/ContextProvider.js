import { useState } from "react";
import Context from "./Context";

export const ContextProvider = ({ children }) => {
  const [paintCans, setPaintCans] = useState({});
  const [error, setError] = useState(null);

  const contextValue = {
    paintCans,
    setPaintCans,
    error,
    setError
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
};
