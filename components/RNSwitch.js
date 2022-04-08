import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { withSpring, spring } from "react-native-reanimated";

const RNSwitch = ({ onPress, thumbColor, value }) => {
  const [switchTranslate] = useState(new Animated.Value(0));
  useEffect(() => {
    if (value) {
      spring(switchTranslate, {
        toValue: 150,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: true,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: true,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [value, switchTranslate]);

  return (
    <Pressable onPress={() => onPress(!value)}>
      <Animated.View style={[styles.container]}>
        <Animated.View
          style={[
            styles.toggle,
            { backgroundColor: thumbColor },
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
            styles.shadowValue,
          ]}
        >
          <Text>{switchTranslate > 75 ? "Doctor" : "Video Consult"}</Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 150,
    height: 28,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 300,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    backgroundColor: "#ebf5fe",
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
});

export default RNSwitch;
