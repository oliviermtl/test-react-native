import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import SymptomContext from "../contexts/SymptomsContext";
import Button from "./Button";

const SymptomsSelected = ({ toggleSymptom }) => {
  const { symptomList } = useContext(SymptomContext);
  const selectedSymptoms = symptomList.symptoms.filter(
    (symptom) => symptom.selected
  );
  return (
    <SafeAreaView style={styles.container}>
      {selectedSymptoms.length > 0 && (
        <Text style={styles.title}>Selected symptoms and reason :</Text>
      )}
      <FlatList
        data={selectedSymptoms}
        numColumns={3}
        keyExtractor={(item) => "symptom" + item.name}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.symptomContainer}>
              <Button
                onPress={() => toggleSymptom(item.name)}
                style={styles.symptom}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={[styles.symptomName]}>{`${item.name} `}</Text>
                  <Text style={[styles.symptomName]}>✓</Text>
                </View>
              </Button>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SymptomsSelected;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 0,
    justifyContent: "center",
    width: "100%",
  },

  title: {
    color: "dimgray",
    fontWeight: "bold",
  },
  symptomContainer: { minHeight: 55, flex: 1 / 3, justifyContent: "center" },
  symptom: {
    backgroundColor: "#59c2d1",
    minHeight: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  symptomName: { fontSize: 13, color: "white", fontWeight: "bold" },
});
