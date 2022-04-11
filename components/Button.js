import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Button(props) {
  const { onPress, style, children, disabled = false } = props;
  return (
    <TouchableOpacity
      style={[styles.button, styles.shadowValue, style]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 8,
  },
  shadowValue: {
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
});
