import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Button(props) {
  const { onPress, style, children } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: "white",
    elevation: 4,
  },
});
