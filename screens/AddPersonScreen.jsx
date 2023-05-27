import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import UploadImage from "../components/UploadImage";
import DatePickerInput from "../components/DatePickerInput";

function AddPersonScreen(props) {
  const [fullName, onChangeFullName] = useState("");
  const [nickname, onChangeNickname] = useState("");
  const [contactDetails, onChangeContactDetails] = useState("");
  const [selectedBloodType, setselectedBloodType] = useState("");

  // Radio buttons for input gender
  const [selected, setSelected] = useState("");
  const options = ["male", "female"];
  // update state
  onPress = (data) => {
    this.state = { data };
    let selectedButton = this.state.data.find((e) => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.data[0].label;
    console.log(this.state.data);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Input for Image picker */}
        <View style={styles.imageContainer}>
          <UploadImage />
        </View>
        {/* Input Fullname */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
            }}
          >
            Full name:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFullName}
            value={fullName}
            placeholder="Full Name"
            autoComplete="name"
          />
        </View>
        {/* Input Nickname */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
            }}
          >
            Nickname:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNickname}
            value={nickname}
            placeholder="Nickname"
          />
        </View>
        {/* Input Birthday */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
            }}
          >
            Birthday:
          </Text>
          <View style={styles.input}>
            <DatePickerInput />
          </View>
        </View>
        {/* Input Gender */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
            }}
          >
            Gender:
          </Text>
          {options.map((option) => {
            return (
              <TouchableOpacity
                key={option}
                style={styles.singleOptionContainer}
                onPress={() => setSelected(option)}
              >
                <View style={styles.outerCircle}>
                  {selected === option ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* Input Blood Type */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
            }}
          >
            Blood type:
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedBloodType}
              onValueChange={(itemValue, itemIndex) =>
                setselectedBloodType(itemValue)
              }
            >
              <Picker.Item value="" label="Choose blood type:" />
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
            </Picker>
          </View>
        </View>
        {/* input Contact Details */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
            }}
          >
            Contact details:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeContactDetails}
            value={contactDetails}
            placeholder="Contact Details"
            keyboardType="decimal-pad"
            autoComplete="tel"
          />
        </View>
        {/* Submit button */}
        <Pressable
          style={styles.submitButton}
          onPress={() => alert("Button is not functioning yet!")}
        >
          <Text
            style={{
              color: "white",
              padding: 10,
            }}
          >
            Add person
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19A7CE",
  },
  input: {
    width: "75%",
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
  },
  singleOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    margin: 5,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 11,
    backgroundColor: "#146C94",
  },
  pickerContainer: {
    width: "75%",
    margin: 0,
    borderWidth: 1,
    padding: 0,
  },
  submitButton: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#146C94",
    alignSelf: "center",
  },
});

export default AddPersonScreen;
