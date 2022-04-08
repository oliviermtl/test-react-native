import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import ModalBase from "./ModalBase";

const NewPatientModal = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const submit = () => {
    if (text !== "") {
      onPress(text);
      setText("");
      setModalVisible(false);
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View>
      <Button onPress={() => setModalVisible(true)} style={[styles.addButton]}>
        <Text style={styles.textButton}>+ Add </Text>
      </Button>

      <ModalBase
        {...{
          title: "Add a new patient",
          subtitle: "Enter patient's name",
          modalVisible,
          setModalVisible,
          onPress: submit,
        }}
      >
        <TextInput
          value={text}
          placeholder="name"
          style={styles.input}
          onChangeText={setText}
          onSubmitEditing={submit}
          autoFocus
          autoCapitalize="words"
        />
      </ModalBase>
    </View>
  );
};

export default NewPatientModal;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: 200,
    borderRadius: 8,
    backgroundColor: "#ebf5fe",
    borderTopColor: "#e7f1f7",
    borderLeftColor: "#e7f1f7",
    borderBottomColor: "#f6f9fd",
    borderRightColor: "#f6f9fd",
    elevation: 1,
  },
  textButton: { color: "dimgray" },
});
