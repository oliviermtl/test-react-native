import React, { createContext } from "react";

const initialState = { mode: "consult" };

const ConsultModeContext = createContext(initialState);

const ConsultModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("consult");

  return (
    <ConsultModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ConsultModeContext.Provider>
  );
};

export default ConsultModeContext;
export { ConsultModeProvider };
