import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import Symptoms from "./Symptoms";
import SymptomContext from "../contexts/SymptomsContext";
import ModalBase from "./ModalBase";

const SymptomsModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const [keyboardShow, setKeyboardShow] = React.useState();
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
    if (!isDuplicate) {
      setSymptomList((symptomList) => {
        return {
          ...symptomList,
          symptoms: [...symptomList.symptoms, newSymptom],
        };
      });
    }
    setText("");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textInput}
        onPress={() => setModalVisible(true)}
      >
        <Text
          style={{
            marginLeft: 10,
            color: "dimgray",
            textAlignVertical: "center",
          }}
        >
          Add reasons
        </Text>
      </TouchableOpacity>
      <ModalBase
        {...{
          title: "Symptoms & Conditions",
          subtitle: "Please specify your symptoms",
          modalVisible,
          setModalVisible,
        }}
      >
        <TextInput
          value={text}
          placeholder="e.g. Cough"
          style={styles.input}
          onChangeText={setText}
          onSubmitEditing={addSymptom}
        />

        {!keyboardShow && <Symptoms />}
      </ModalBase>
    </View>
  );
};

export default SymptomsModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
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

  textInput: { color: "grey" },
});
