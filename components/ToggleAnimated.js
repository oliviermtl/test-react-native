import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const ToggleAnimated = ({ onPress, value }) => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
      overshootClamping: false,
    };
  });

  useEffect(() => {
    offset.value = withSpring(value ? 150 : 0, {
      mass: 0.5,
      overshootClamping: true,
    });
  }, [value]);

  return (
    <View>
      <Pressable onPress={() => onPress(!value)}>
        <View style={[styles.container]}>
          <Animated.View
            style={[styles.toggle, styles.shadowValue, animatedStyles]}
          >
            <Text style={styles.toggleText}>
              {value ? "Video Consult" : "Doctor"}
            </Text>
          </Animated.View>
          <View style={styles.underlay}>
            <View style={styles.underlayText}>
              <Text>Doctor</Text>
              <Text>Video Consult</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ToggleAnimated;
const styles = StyleSheet.create({
  container: {
    width: 300,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    backgroundColor: "#ebf5fe",
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
    color: "#59c2d1",
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
  underlayText: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 0,
  },
});
