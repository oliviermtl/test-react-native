import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Book } from "../screens/Book";
import { Home } from "../screens/Home";

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTintColor: "red",
        headerTitleStyle: {
          color: "rgb(28,30,33)",
        },
        headerTintColor: "blue",
      }}
    />
    <MainStack.Screen
      name="Book a Doctor"
      component={Book}
      options={{
        headerTitleStyle: {
          color: "rgb(28,30,33)",
        },
        headerTintColor: "cyan",
        headerBackTitle: " ",
      }}
    />
  </MainStack.Navigator>
);
