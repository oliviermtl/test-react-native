import React, { useState, createContext } from "react";

const generateRanges = () => {
  const minutes = ["00", 30];
  const ranges = [{ label: "Now", selected: true }];
  for (let hours = 0; hours < 24; hours++) {
    const range = "";

    minutes.map((minute) => {
      const separator = minute === "00" ? " - " : "";
      return (range += `${hours}:${minute}${separator}`);
    });
    ranges.push({ label: range, selected: false });
  }
  return ranges;
};
const ranges = generateRanges();
const initialState = {
  time: ranges,
  date: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
};

const DateTimeContext = createContext({ initialState });

const DateTimeProvider = ({ children }) => {
  const [dateTime, setDateTime] = useState(initialState);

  return (
    <DateTimeContext.Provider value={{ dateTime, setDateTime }}>
      {children}
    </DateTimeContext.Provider>
  );
};

export default DateTimeContext;
export { DateTimeProvider };
