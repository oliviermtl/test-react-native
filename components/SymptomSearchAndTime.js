import { StyleSheet, View } from "react-native";
import React from "react";
import SymptomsModal from "./SymptomsModal";
import DateTimeModal from "./DateTimeModal";

const SymptomSearchAndTime = () => {
  return (
    <View style={styles.input}>
      <SymptomsModal />
      <DateTimeModal />
    </View>
  );
};

export default SymptomSearchAndTime;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ebf5fe",
    borderTopColor: "#e7f1f7",
    borderLeftColor: "#e7f1f7",
    borderBottomColor: "#f6f9fd",
    borderRightColor: "#f6f9fd",
    elevation: 1,
  },
});
