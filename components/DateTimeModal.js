import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import Calendar from "./Calendar";
import TimeRanges from "./TimeRanges";
import ModalBase from "./ModalBase";
import DateTimeContext from "../contexts/DateTimeContext";
import { monthsShort } from "../data/data";

const DateTimeModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { dateTime } = useContext(DateTimeContext);

  const selectedRange = dateTime.time.filter(
    (range) => range.selected === true
  )[0].label;
  const selectedDay = `${dateTime.date.day} ${
    monthsShort[dateTime.date.month]
  } `;
  const displayDate =
    selectedRange === "Now" ? selectedRange : `${selectedDay} ${selectedRange}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.dateTime,
          selectedRange === "Now" ? styles.now : styles.later,
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.displayDate}>{displayDate}</Text>
      </TouchableOpacity>
      <ModalBase
        {...{
          title: "Schedule appointment",
          subtitle: "Please select date and time window:",
          modalVisible,
          setModalVisible,
        }}
      >
        <Calendar />
        <TimeRanges />
      </ModalBase>
    </View>
  );
};

export default DateTimeModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 10,
    alignContent: "flex-end",
    alignItems: "center",
  },
  dateTime: {
    padding: 5,
    borderRadius: 5,
  },
  now: {
    backgroundColor: "orange",
  },
  later: {
    backgroundColor: "limegreen",
  },
  displayDate: {
    color: "white",
  },
});
