import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import React, { useContext } from "react";
import SymptomSearchAndTime from "../components/SymptomSearchAndTime";
import Patients from "../components/Patients";
import SymptomsSelection from "../components/SymptomsSelection";
import ConsultModeContext from "../contexts/ConsultModeContext";
import DateTimeContext from "../contexts/DateTimeContext";
import PatientContext from "../contexts/PatientsContext";
import SymptomContext from "../contexts/SymptomsContext";
import { months } from "../constants/data";
import ConsultModeSwitch from "../components/ConsultModeSwitch";

export const Book = () => {
  const { mode } = useContext(ConsultModeContext);
  const { dateTime } = useContext(DateTimeContext);
  const { patientList } = useContext(PatientContext);
  const { symptomsList } = useContext(SymptomContext);

  const patients = patientList.patients.filter((patient) => patient.selected);
  const selectedRange = dateTime.time.filter(
    (range) => range.selected === true
  )[0].label;
  const selectedDay = `${dateTime.date.day} ${months[dateTime.date.month]} `;
  const displayDate =
    selectedRange === "Now" ? selectedRange : `${selectedDay} ${selectedRange}`;

  const submit = () => {
    const message = `You have booked a ${mode} consultation for${patients.map(
      (patient) => ` ${patient.name}`
    )} on ${displayDate}`;
    Alert.alert("Ready to Book", message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={styles.container}>
      <ConsultModeSwitch />
      <Patients />
      <SymptomSearchAndTime />
      <SymptomsSelection />
      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          padding: 10,
          marginTop: 20,
          backgroundColor: "rgb(28,30,33)",
          borderRadius: 5,
        }}
        disabled={patients.length == 0}
        onPress={submit}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 15 },
});
