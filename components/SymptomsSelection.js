import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import SymptomContext from "../contexts/SymptomsContext";
import SymptomsSelected from "./SymptomsSelected";
import SymptomsAvailable from "./SymptomsAvailable";

const SymptomsSelection = () => {
  const { symptomList, setSymptomList } = useContext(SymptomContext);

  const toggleSymptom = (name) => {
    const newSymptomList = symptomList.symptoms.map((symptom) =>
      symptom.name === name
        ? { ...symptom, selected: !symptom.selected }
        : symptom
    );
    setSymptomList({ symptoms: newSymptomList });
  };
  return (
    <View style={styles.container}>
      {/* SymptomsSelection selected */}
      <SymptomsSelected {...{ toggleSymptom }} />
      {/* SymptomsSelection available not selected */}
      <SymptomsAvailable {...{ toggleSymptom }} />
    </View>
  );
};

export default SymptomsSelection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
});
