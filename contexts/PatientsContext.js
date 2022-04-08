import React, { useState, createContext } from "react";

const initialState = {
  patients: [
    { name: "John", selected: false },
    { name: "Jane", selected: true },
  ],
};
const PatientContext = createContext({ initialState });

const PatientProvider = ({ children }) => {
  const [patientList, setPatientList] = useState(initialState);

  return (
    <PatientContext.Provider value={{ patientList, setPatientList }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
export { PatientProvider };
