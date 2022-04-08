import { StyleSheet, Text, FlatList, View } from "react-native";
import React, { useContext } from "react";
import PatientContext from "../contexts/PatientsContext";
import NewPatientModal from "./NewPatientModal";
import Button from "./Button";

const Patients = () => {
  const { patientList, setPatientList } = useContext(PatientContext);

  const togglePatient = (name) => {
    const newPatientList = patientList.patients.map((patient) =>
      patient.name === name
        ? { ...patient, selected: !patient.selected }
        : patient
    );
    setPatientList({ patients: newPatientList });
  };

  const addPatient = (name) => {
    const nameExists = patientList.patients.some((item) => item.name === name);
    const newPatientList = patientList.patients.concat({
      name: name,
      selected: false,
    });
    if (!nameExists) setPatientList({ patients: newPatientList });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Choose Patient :</Text>
      <View style={styles.container}>
        <NewPatientModal onPress={addPatient} />
        <FlatList
          data={patientList.patients}
          horizontal={true}
          keyExtractor={(item) => "patient" + item.name}
          renderItem={({ item, index }) => {
            return (
              <Button
                onPress={() => togglePatient(item.name)}
                style={[
                  item.selected
                    ? styles.patientSelected
                    : styles.patientNotSelected,
                ]}
              >
                <Text style={[styles.textButton]}>{item.name}</Text>
              </Button>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Patients;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "dimgray",
  },
  container: {
    marginVertical: 1,
    flexDirection: "row",
  },
  textButton: { color: "dimgray" },

  insideContainer: {
    flexDirection: "row",

    alignItems: "center",
  },
  patientSelected: { borderColor: "#59c2d1", borderWidth: 1 },
  patientNotSelected: { color: "dimgray" },
  addButton: { marginRight: 10, color: "dimgray" },
  patient: { marginLeft: 10, color: "dimgray" },
});
