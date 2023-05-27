import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import familyMember from "../assets/familyMembers";
import AddPersonScreen from "./AddPersonScreen";

function HomeScreen(props) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Title */}
        <Text
          style={{
            textAlign: "center",
            margin: 20,
            fontSize: 20,
          }}
        >
          Select or add family member
        </Text>
        <View
          style={{
            margin: "0 auto",
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            margin: 30,
          }}
        >
          {/* List all profiles */}
          {familyMember.map((familyMember, index) => {
            let screenName = `IndividualScreen${index}`;
            return (
              <Pressable
                key={index}
                onPress={() => props.navigation.navigate(screenName, { index })}
                style={{
                  height: windowWidth / 3,
                  width: windowWidth / 3,
                  borderColor: "#19A7CE",
                  borderWidth: 2,
                  borderRadius: windowWidth / 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {familyMember.gender === "female" ? (
                  <Fontisto name="female" size={45} color="#146C94" />
                ) : (
                  <Fontisto name="male" size={45} color="#146C94" />
                )}
                <Text style={{ color: "#146C94", padding: 10 }}>
                  {familyMember.nickname}
                </Text>
              </Pressable>
            );
          })}
          {/* Add Person */}
          <Pressable
            onPress={() => props.navigation.navigate(AddPersonScreen)}
            style={{
              height: windowWidth / 3,
              width: windowWidth / 3,
              borderColor: "#19A7CE",
              borderWidth: 2,
              borderRadius: windowWidth / 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="adduser" size={45} color="#146C94" />
            <Text style={{ color: "#146C94", padding: 10 }}>Add Person</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
