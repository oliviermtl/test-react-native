import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Colors } from "../constants/colors";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Button
        title="Book a Doctor"
        onPress={() => navigation.navigate("Book a Doctor")}
        style={styles.button}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Book a Doctor
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  button: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
  },
});
