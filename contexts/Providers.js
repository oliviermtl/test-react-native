import { View, Text } from "react-native";
import React from "react";
import { PatientProvider } from "./PatientsContext";
import { SymptomProvider } from "./SymptomsContext";
import { DateTimeProvider } from "./DateTimeContext";
import { ConsultModeProvider } from "./ConsultModeContext";

const Providers = ({ children }) => {
  return (
    <PatientProvider>
      <SymptomProvider>
        <DateTimeProvider>
          <ConsultModeProvider>{children}</ConsultModeProvider>
        </DateTimeProvider>
      </SymptomProvider>
    </PatientProvider>
  );
};

export default Providers;
