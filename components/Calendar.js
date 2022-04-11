import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import DateTimeContext from "../contexts/DateTimeContext";
import { nDays, weekdayshort, months } from "../constants/data";

const Calendar = () => {
  const { dateTime, setDateTime } = useContext(DateTimeContext);
  const [selectedMonth, setSelectedMonth] = useState(month);

  // date in context
  const { day, month, year } = dateTime.date;

  let firstDayOfTheMonth = new Date(year, month, 1).getDay();
  const generateMonthMatrix = () => {
    const matrix = [];
    matrix.push(...weekdayshort);
    const maxDays = nDays[month] + firstDayOfTheMonth;
    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
    let counter = 1;
    for (let i = 0; i < 35; i++) {
      if (i < firstDayOfTheMonth || i >= maxDays) {
        matrix.push(-1);
      } else {
        matrix.push(counter);
        counter++;
      }
    }

    return matrix;
  };
  const matrix = generateMonthMatrix();

  const updateMonth = (n) => {
    setDateTime({ ...dateTime, date: { ...dateTime.date, month: month + n } });
  };

  const updateDay = (item) => {
    setSelectedMonth(month);
    setDateTime({ ...dateTime, date: { ...dateTime.date, day: item } });
  };

  // Today
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setSelectedMonth(month);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.monthyear}>
        <TouchableOpacity
          onPress={() => updateMonth(-1)}
          disabled={month <= currentMonth}
        >
          <Text style={styles.arrow}>{`<`}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text>{`${months[month]} ${year}`}</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => updateMonth(1)}>
          <Text style={styles.arrow}>{`>`}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendar}>
        <FlatList
          numColumns={7}
          data={matrix}
          keyExtractor={(item, index) => `item${index}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flex: 1 / 7,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {
                  <TouchableOpacity
                    disabled={
                      index < 7 ||
                      (item < currentDay && month <= currentMonth) ||
                      month <= currentMonth - 1
                    }
                    onPress={() => {
                      updateDay(item);
                    }}
                    style={{
                      backgroundColor:
                        item == day &&
                        month == selectedMonth &&
                        year == currentYear
                          ? "limegreen"
                          : "#fff",
                      borderRadius: 18,
                      height: 35,
                      width: 35,
                      margin: 5,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        // Highlight current date
                        fontWeight:
                          item == currentDay &&
                          month == currentMonth &&
                          year == currentYear
                            ? "bold"
                            : "normal",
                        color:
                          item == day &&
                          month == selectedMonth &&
                          year == currentYear
                            ? "#fff"
                            : index < 7
                            ? "grey"
                            : item < currentDay && month == currentMonth
                            ? "#cfcfcf"
                            : "dimgray",
                      }}
                    >
                      {item != -1 ? item : ""}
                    </Text>
                  </TouchableOpacity>
                }
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
  monthyear: {
    backgroundColor: "#ececec",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  arrow: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  calendar: {
    justifyContent: "center",
    alignContent: "center",
  },
  headerRow: {
    flexDirection: "row",
  },
});
