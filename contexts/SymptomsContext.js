import React, { useState, createContext } from "react";
const symptoms = () => {
  const arraySymptoms = [];
  for (let index = 0; index < 10; index++) {
    arraySymptoms.push({ name: `symptom ${index}`, selected: false });
  }
  return arraySymptoms;
};
const initialState = {
  symptoms: symptoms(),
};
const SymptomContext = createContext({ initialState });

const SymptomProvider = ({ children }) => {
  const [symptomList, setSymptomList] = useState(initialState);

  return (
    <SymptomContext.Provider value={{ symptomList, setSymptomList }}>
      {children}
    </SymptomContext.Provider>
  );
};

export default SymptomContext;
export { SymptomProvider };
