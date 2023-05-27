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

function AddDiseaseScreen({ route, navigation }) {
  const { index } = route.params;
  const [disease, onChangeDisease] = useState("");
  const [note, onChangeNote] = useState("");

  //   To adjust height of textInput of field "Notes"
  const [height, setHeight] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView>
        {/* input disease */}
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
            Disease:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDisease}
            value={disease}
            placeholder="Disease"
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
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#146C94",
    alignSelf: "center",
  },
});
export default AddDiseaseScreen;
