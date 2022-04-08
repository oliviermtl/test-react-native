import { StyleSheet, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import ToggleAnimated from "./ToggleAnimated";
import ConsultModeContext from "../contexts/ConsultModeContext";

const ToggleSwitch = () => {
  const [switchState, setSwitchState] = useState(false);
  const { setMode } = useContext(ConsultModeContext);
  const onPressSwitch = (value) => {
    setSwitchState(value);
  };

  useEffect(() => {
    setMode(switchState ? "Video" : "Doctor");
  }, [switchState]);

  return (
    <View style={styles.container}>
      {/* <RNSwitch onPress={onPressSwitch} thumbColor="#FFF" value={switchState} /> */}
      <ToggleAnimated onPress={onPressSwitch} value={switchState} />
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
});
