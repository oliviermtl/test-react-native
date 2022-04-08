import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";

const ModalBase = ({
  title,
  subtitle,
  modalVisible,
  setModalVisible,
  onPress = null,
  children,
}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        presentationStyle="overFullScreen"
      >
        <View style={styles.container}>
          <View style={[styles.modalView]}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            {children}
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
                padding: 10,
                marginTop: 20,
                backgroundColor: "rgb(28,30,33)",
                borderRadius: 5,
              }}
              onPress={onPress ? onPress : () => setModalVisible(false)}
            >
              <Text style={{ textAlign: "center", color: "white" }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalBase;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    width: "100%",
    // flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  titleContainer: {
    marginTop: 10,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: "100%",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
    color: "dimgray",
  },
  subtitle: {
    color: "dimgray",
  },
});
