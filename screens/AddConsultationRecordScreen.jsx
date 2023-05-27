import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import DatePickerInput from "../components/DatePickerInput";
import UploadMultipleImages from "../components/UploadMultipleImages";
import VoiceRecorder from "../components/VoiceRecorder";
import UploadMultipleFiles from "../components/UploadMultipleFiles";

function AddConsultationRecordScreen({ route, navigation }) {
  const { index } = route.params;
  const [place, onChangePlace] = useState("");
  const [doctor, onChangeDoctor] = useState("");
  const [note, onChangeNote] = useState("");
  const [images, setImages] = useState([]);

  //   To adjust height of textInput of field "Notes"
  const [height, setHeight] = useState(0);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Input Date */}
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
            Consultation date:
          </Text>
          <View style={styles.input}>
            <DatePickerInput />
          </View>
        </View>
        {/* input Clinic/Hospital */}
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
            Clinic/Hospital:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePlace}
            value={place}
            placeholder="Clinic/Hospital"
          />
        </View>
        {/* input Doctor */}
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
            Doctor:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDoctor}
            value={doctor}
            placeholder="Doctor"
          />
        </View>
        {/* input Notes */}
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
            Notes:
          </Text>
          <TextInput
            style={[styles.input, { height: Math.max(35, height) }]}
            multiline={true}
            onChangeText={onChangeNote}
            onContentSizeChange={(event) =>
              setHeight(event.nativeEvent.contentSize.height)
            }
            value={note}
            placeholder="Notes"
          />
        </View>
        {/* input Images */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
              paddingTop: 10,
            }}
          >
            Images:
          </Text>
          <View>
            {/* <Camera /> */}
            <UploadMultipleImages />
          </View>
        </View>
        {/* input Sounds */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
              paddingTop: 10,
            }}
          >
            Sound recordings:
          </Text>
          <View>
            <VoiceRecorder />
          </View>
        </View>
        {/* input Documents */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: 12,
          }}
        >
          <Text
            style={{
              width: "20%",
              paddingTop: 10,
            }}
          >
            Documents:
          </Text>
          <View>
            <UploadMultipleFiles />
          </View>
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
              width: 100,
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
  input: {
    width: "75%",
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#146C94",
    alignSelf: "center",
  },
});
export default AddConsultationRecordScreen;
