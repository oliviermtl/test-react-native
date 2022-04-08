import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Button
        title="Book a Doctor"
        onPress={() => navigation.navigate("Book a Doctor")}
        style={{
          paddingVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#59c2d1",
        }}
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
    // justifyContent: "center",
    padding: 16,
  },
});
