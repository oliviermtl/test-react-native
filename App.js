import React from "react";
import { StatusBar } from "expo-status-bar";
import { Main } from "./navigation/Main";
import { NavigationContainer } from "@react-navigation/native";
import Providers from "./contexts/Providers";

export default function App() {
  return (
    <React.Fragment>
      <Providers>
        <NavigationContainer>
          <StatusBar />
          <Main />
        </NavigationContainer>
      </Providers>
    </React.Fragment>
  );
}
