import { StyleSheet, Text, FlatList, View } from "react-native";
import React, { useContext } from "react";
import PatientContext from "../contexts/PatientsContext";
import PatientAddModal from "./PatientAddModal";
import Button from "./Button";
import { Colors } from "../constants/colors";

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
        <PatientAddModal onPress={addPatient} />
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
  patientSelected: { borderColor: Colors.blue, borderWidth: 1 },
  patientNotSelected: {
    color: "dimgray",
    borderWidth: 1,
    borderColor: "#efefef",
  },
  addButton: { marginRight: 10, color: "dimgray" },
  patient: { marginLeft: 10, color: "dimgray" },
});
