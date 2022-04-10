import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useGetStorage, useGetSymptoms, useUpdateStorage } from "../services";

const BookReactQuery = () => {
  const { data: patientsList, isLoading, isError } = useGetStorage("@patients");
  const {
    data: symptomsList,
    isLoading: isLoadingSymptoms,
    isError: isErrorSymptoms,
  } = useGetSymptoms();

  const updatePatientsList = useUpdateStorage("@patients");
  const addPatient = (patient) => {
    const isDuplicate = patientsList.some(
      (p) => JSON.stringify(p) === JSON.stringify(patient)
    );
    if (!isDuplicate) {
      updatePatientsList.mutate(patient);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Patients stored in AsyncStorage</Text>
      <Button
        onPress={() =>
          addPatient({
            name: `Patient-${Number(Math.random() * 100).toFixed(0)}`,
            age: Number(Math.random() * 100).toFixed(0),
          })
        }
        disabled={updatePatientsList.isLoading}
      >
        <Text style={{ textAlign: "center" }}>
          {updatePatientsList.isLoading
            ? "updating patient list"
            : "Add new patient"}
        </Text>
      </Button>
      <Text>{JSON.stringify(patientsList)}</Text>
      <Text style={{ marginTop: 10 }}>Symptoms fetched from API</Text>
      {isLoadingSymptoms ? (
        <Text>fetching symptoms</Text>
      ) : symptomsList ? (
        <Text>{JSON.stringify(symptomsList)}</Text>
      ) : (
        <Text>woops we did not find symptoms</Text>
      )}
    </View>
  );
};

export default BookReactQuery;

const styles = StyleSheet.create({
  container: {},
});
