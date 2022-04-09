import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
} from "react-native";
import React, { useContext } from "react";
import DateTimeContext from "../contexts/DateTimeContext";

const TimeRanges = () => {
  const { dateTime, setDateTime } = useContext(DateTimeContext);

  const updateDateTime = (item) => {
    const allRanges = dateTime.time;
    allRanges.map((range) => (range.selected = range == item ? true : false));
    setDateTime({ ...dateTime, time: allRanges });
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.title}>Select a time slot</Text>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          horizontal
          data={dateTime.time}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[
                  styles.tag,
                  {
                    display: item.label === "Now" ? "none" : "flex",
                    borderColor: item.selected ? "limegreen" : "rgb(28,30,33)",
                  },
                ]}
                onPress={() => updateDateTime(item)}
              >
                <Text style={styles.tagLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default TimeRanges;

const styles = StyleSheet.create({
  container: { margin: 10, flexDirection: "column" },
  listContainer: { flexDirection: "row" },
  tag: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderLeftWidth: 7,
  },
  tagLabel: { color: "dimgray" },
  divider: {
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 10,
  },
  title: { marginBottom: 10, color: "dimgray" },
});
