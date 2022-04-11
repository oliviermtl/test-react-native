import { View, Text } from "react-native";
import React from "react";
import { SymptomProvider } from "./SymptomsContext";
import { DateTimeProvider } from "./DateTimeContext";
import { ConsultModeProvider } from "./ConsultModeContext";

const Providers = ({ children }) => {
  return (
    <SymptomProvider>
      <DateTimeProvider>
        <ConsultModeProvider>{children}</ConsultModeProvider>
      </DateTimeProvider>
    </SymptomProvider>
  );
};

export default Providers;
