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
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import familyMember from "../assets/familyMembers";

function ProfileScreen({ route, navigation }) {
  const { index } = route.params;
  console.log(index);

  const [fullName, onChangeFullName] = useState(familyMember[index].fulllname);
  const [nickname, onChangeNickname] = useState(familyMember[index].nickname);
  const [contactDetails, onChangeContactDetails] = useState(
    familyMember[index].contactNo
  );
  const [selectedBloodType, setselectedBloodType] = useState(
    familyMember[index].bloodType
  );

  // Calculate age
  calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };

  // Radio buttons for input gender
  const [selected, setSelected] = useState(familyMember[index].gender);
  const options = ["male", "female"];
  //  update state
  onPress = (data) => {
    this.state = { data };
    let selectedButton = this.state.data.find((e) => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.data[0].label;
  };

  //  Datepicker for birthday
  const [mydate, setDate] = useState(new Date(familyMember[index].birthday));
  const [isDisplayDate, setShow] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const displayDatepicker = () => {
    setShow(true);
  };

  const getDate = () => {
    let tempDate = mydate.toString().split(" ");
    return mydate !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : "";
  };

  // Imagepicker
  const imageURI = familyMember[index].imageURI;
  const [image, setImage] = useState(imageURI);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(JSON.stringify(_image));
    if (!_image.canceled) {
      setImage(_image.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Input for Image picker */}
        <View style={styles.imageContainer}>
          <View style={imageUploaderStyles.container}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <View style={imageUploaderStyles.uploadBtnContainer}>
              <TouchableOpacity
                onPress={addImage}
                style={imageUploaderStyles.uploadBtn}
              >
                <Text>{image ? "Edit" : "Upload"} Image</Text>
                <AntDesign name="camera" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
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
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput value={getDate()} placeholder="Date..." />
              <Pressable onPress={displayDatepicker}>
                <MaterialIcons name="date-range" size={18} color="black" />
              </Pressable>
            </View>
            {isDisplayDate && (
              <DateTimePicker
                value={mydate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={changeSelectedDate}
              />
            )}
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
              textAlign: "center",
            }}
          >
            Save
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
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
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#146C94",
    alignSelf: "center",
    width: 150,
  },
});
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
