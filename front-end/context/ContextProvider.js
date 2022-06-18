import { useState } from "react";
import Context from "./Context";

export const ContextProvider = ({ children }) => {
  const [paintCans, setPaintCans] = useState({});

  const contextValue = {
    paintCans,
    setPaintCans,
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
};
