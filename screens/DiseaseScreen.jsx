import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import diseaseSample from "../assets/diseaseSample";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import { useState } from "react";
import familyMember from "../assets/familyMembers";

function DiseaseScreen({ route, navigation }) {
  const { index } = route.params;
  console.log(index);

  [showWebPart, setShowWebPart] = useState(false);
  [selectedDisease, setSelectedDisease] = useState("");

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

  return showWebPart ? (
    <WebView
      source={{
        uri: `https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3aproject=medlineplus&v%3asources=medlineplus-bundle&query=${selectedDisease}&`,
      }}
    />
  ) : (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignItems: "flex-end",
      }}
    >
      {/* Display name, gender, and ages */}
      <View
        style={{
          alignSelf: "center",
          margin: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#146C94",
            fontSize: 30,
          }}
        >
          {familyMember[index].nickname}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#146C94",
            fontSize: 20,
          }}
        >
          {familyMember[index].gender}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#146C94",
            fontSize: 20,
          }}
        >
          {calculate_age(familyMember[index].birthday)} years old
        </Text>
      </View>
      {/* List */}
      <FlatList
        style={{
          margin: 20,
          width: "90%",
        }}
        data={diseaseSample}
        renderItem={({ item }) => {
          return (
            <Pressable
              // onPress={() =>
              //   // navigation.navigate({
              //   //   name:"EditDiseaseScreen",
              //   //   params: {
              //   //   index: index,}})
              //   alert(
              //     "Details View and Edit/Remove functions are not implemented yet"
              //   )
              // }
              style={styles.container}
            >
              {/* disease */}
              <View
                style={[
                  styles.item,
                  { display: "flex", flexDirection: "row", padding: 10 },
                ]}
              >
                <FontAwesome5 name="disease" size={24} color="black" />
                <Text
                  style={{
                    fontStyle: "italic",
                    fontSize: 18,
                    marginLeft: 10,
                    fontWeight: "bold",
                  }}
                >
                  {item.disease}
                </Text>
              </View>
              {/* Description */}
              <View
                style={[
                  styles.item,
                  { display: "flex", flexDirection: "row", padding: 10 },
                ]}
              >
                <Text
                  style={{
                    fontStyle: "italic",
                    fontSize: 18,
                    marginLeft: 10,
                  }}
                >
                  {item.description}
                </Text>
              </View>
              {/* External referenece */}
              <Pressable
                style={styles.button}
                onPress={(e) => {
                  setSelectedDisease(item.disease);
                  setShowWebPart(true);
                }}
              >
                <Text
                  style={{
                    color: "#146C94",
                    paddingLeft: 20,
                    paddingBottom: 10,
                    fontSize: 18,
                  }}
                >
                  Read more...
                </Text>
              </Pressable>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 20, gap: 10 }} />}
      />
      {/* "Add" button */}
      <Pressable
        styes={styles.addButton}
        onPress={() =>
          navigation.navigate({
            name: "AddDiseaseScreen",
            params: { index: index },
          })
        }
      >
        <Ionicons name="add-circle-outline" size={60} color="#146C94" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FEFF86",
    borderLeftColor: "#146C94",
    borderLeftWidth: 10,
    flexGrow: 1,
    width: "100%",
    position: "relative",
  },
  item: {
    fontSize: 18,
    lineHeight: 10,
  },
  addButton: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35,
    // right: 35,
  },
});

export default DiseaseScreen;
