import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import PatientAddModal from "./PatientAddModal";
import Button from "./Button";
import { Colors } from "../constants/colors";
import { useAddStorageItem, useUpdateStorageItem } from "../services";

const Patients = ({ patientList }) => {
  const updatePatientsList = useAddStorageItem("@patients");
  const updatePatientInList = useUpdateStorageItem("@patients");
  const togglePatient = (patient) => {
    updatePatientInList.mutate(patient);
  };

  const addPatient = (patient) => {
    const newPatient = { name: patient, selected: false };
    const isDuplicate = patientList.some((p) => p.name === patient.name);
    if (!isDuplicate) {
      updatePatientsList.mutate(newPatient);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Choose Patient :</Text>
      <View style={styles.container}>
        <PatientAddModal onPress={addPatient} />
        <FlatList
          data={patientList}
          horizontal={true}
          keyExtractor={(item) => "patient" + item.name}
          renderItem={({ item }) => {
            return (
              <Button
                onPress={() => togglePatient(item)}
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
