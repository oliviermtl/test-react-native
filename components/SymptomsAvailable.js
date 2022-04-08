import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import React, { useContext } from "react";
import SymptomContext from "../contexts/SymptomsContext";
import Button from "./Button";

const SymptomsAvailable = ({ toggleSymptom }) => {
  const { symptomList } = useContext(SymptomContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your symptoms and reasons :</Text>
      <FlatList
        data={symptomList.symptoms.filter((symptom) => !symptom.selected)}
        numColumns={3}
        keyExtractor={(item) => "symptomavailable" + item.name}
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
                  <Text style={[styles.symptomName]}>+</Text>
                </View>
              </Button>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SymptomsAvailable;

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    justifyContent: "center",
    width: "100%",
  },

  title: {
    color: "dimgray",
    fontWeight: "bold",
  },
  symptomContainer: {
    minHeight: 55,
    flex: 1 / 3,
    justifyContent: "center",
  },
  symptom: {
    backgroundColor: "white",
    minHeight: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  symptomName: { fontSize: 13, color: "#59c2d1", fontWeight: "bold" },
});
