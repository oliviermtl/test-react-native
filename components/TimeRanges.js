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
      <View
        style={{
          borderBottomColor: "#cfcfcf",
          borderBottomWidth: 1,
          marginBottom: 20,
          marginTop: 10,
        }}
      />
      <Text style={{ marginBottom: 10, color: "dimgray" }}>
        Select a time slot
      </Text>
      <SafeAreaView style={{ flexDirection: "row" }}>
        <FlatList
          horizontal
          data={dateTime.time}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  display: item.label === "Now" ? "none" : "flex",
                  margin: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderLeftWidth: item.selected ? 7 : 1,
                  borderColor: item.selected ? "limegreen" : "dimgray",
                }}
                onPress={() => updateDateTime(item)}
              >
                <Text style={{ color: "dimgray" }}>{item.label}</Text>
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
});
