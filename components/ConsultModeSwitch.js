import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors } from "../constants/colors";
import ConsultModeContext from "../contexts/ConsultModeContext";

const ConsultModeSwitch = () => {
  const [switchState, setSwitchState] = useState(false);
  const { setMode } = useContext(ConsultModeContext);

  useEffect(() => {
    setMode(switchState ? "Video" : "Doctor");
  }, [switchState]);

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
      overshootClamping: false,
    };
  });

  useEffect(() => {
    offset.value = withSpring(switchState ? 150 : 0, {
      mass: 0.5,
      overshootClamping: true,
    });
  }, [switchState]);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setSwitchState(!switchState)}>
        <View style={[styles.switchContainer]}>
          <Animated.View
            style={[styles.toggle, styles.shadowValue, animatedStyles]}
          >
            <Text style={styles.toggleText}>
              {switchState ? "Video Consult" : "Doctor"}
            </Text>
          </Animated.View>
          <View style={styles.underlay}>
            <View style={styles.underlayTextContainer}>
              <Text style={styles.underlayText}>Doctor</Text>
              <Text style={styles.underlayText}>Video Consult</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ConsultModeSwitch;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  switchContainer: {
    width: 300,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    backgroundColor: Colors.lightBlue,
  },
  toggle: {
    width: 150,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 1,
  },
  toggleText: {
    color: Colors.blue,
    fontWeight: "bold",
  },

  shadowValue: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  underlay: {
    position: "absolute",
    top: 10,
    left: 55,
    right: 35,
  },

  underlayTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 0,
  },
  underlayText: {
    color: "dimgray",
  },
});
