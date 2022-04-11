import React from "react";
import { StatusBar } from "expo-status-bar";
import { Main } from "./navigation/Main";
import { NavigationContainer } from "@react-navigation/native";
import Providers from "./contexts/Providers";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Providers>
          <NavigationContainer>
            <StatusBar />
            <Main />
          </NavigationContainer>
        </Providers>
      </QueryClientProvider>
    </React.Fragment>
  );
}
