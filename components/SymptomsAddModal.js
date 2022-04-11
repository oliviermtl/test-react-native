import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import SymptomsSelection from "./SymptomsSelection";
import SymptomContext from "../contexts/SymptomsContext";
import ModalBase from "./ModalBase";
import { Colors } from "../constants/colors";

const SymptomsAddModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const [keyboardShow, setKeyboardShow] = useState();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const { symptomList, setSymptomList } = useContext(SymptomContext);
  // add symptom to symptomList
  const addSymptom = () => {
    const newSymptom = { name: text, selected: true };
    // check if newSymptom is already in symptomList
    const isDuplicate = symptomList.symptoms.some(
      (item) => item.name === newSymptom.name
    );
    if (!isDuplicate && newSymptom.name !== "") {
      setSymptomList((symptomList) => {
        return {
          ...symptomList,
          symptoms: [...symptomList.symptoms, newSymptom],
        };
      });
    }
    setText("");
  };

  const addSymptomAndClose = () => {
    addSymptom();
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.placeholder}>Add reasons</Text>
      </TouchableOpacity>
      <ModalBase
        {...{
          title: "SymptomsSelection & Conditions",
          subtitle: "Please specify your symptoms",
          modalVisible,
          setModalVisible,
          onPress: addSymptomAndClose,
        }}
      >
        <TextInput
          value={text}
          placeholder="e.g. Cough"
          style={styles.input}
          onChangeText={setText}
          onSubmitEditing={addSymptom}
        />

        {!keyboardShow && <SymptomsSelection />}
      </ModalBase>
    </View>
  );
};

export default SymptomsAddModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    marginTop: 12,
    paddingLeft: 12,
    backgroundColor: Colors.lightBlue,
    minWidth: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderTopColor: "#e7f1f7",
    borderLeftColor: "#e7f1f7",
    borderBottomColor: "#f6f9fd",
    borderRightColor: "#f6f9fd",
    elevation: 1,
  },

  placeholder: {
    minWidth: 150,
    marginLeft: 10,
    color: "dimgray",
    textAlignVertical: "center",
    textAlign: "left",
  },
});
