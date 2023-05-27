import * as React from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

function IndividualScreen(props) {
  const index = props.route.params["index"];
  console.log(index);

  return (
    <SafeAreaView>
      {/* Button Edit Info */}
      <Pressable
        onPress={() => {
          props.navigation.navigate({
            name: "ProfileScreen",
            params: { index: index },
          });
        }}
        style={styles.editButton}
      >
        <Text
          style={{
            color: "#146C94",
          }}
        >
          Edit Info
        </Text>
      </Pressable>
      {/* List of functions */}
      <ScrollView>
        <View style={styles.wrapper}>
          {/* Button Doctor's Appointment */}
          <View style={styles.container}>
            <Pressable
              onPress={() => {
                props.navigation.navigate({
                  name: "DoctorAppointmentScreen",
                  params: { index: index },
                });
              }}
              style={styles.icon}
            >
              <Fontisto name="doctor" size={83} color="#146C94" />
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center", flexWrap: "wrap" }}>
              Doctor appointment
            </Text>
          </View>
          {/* Button Consultation record*/}
          <View style={styles.container}>
            <Pressable
              onPress={() => {
                props.navigation.navigate({
                  name: "ConsultationRecordScreen",
                  params: { index: index },
                });
              }}
              style={styles.icon}
            >
              <FontAwesome5 name="stethoscope" size={83} color="#146C94" />
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>
              Consultation record
            </Text>
          </View>
          {/* Button Medication List*/}
          <View style={styles.container}>
            <Pressable
              // onPress={() => props.navigation.navigate(screenName, { index })}
              style={[styles.icon, { borderColor: "grey" }]}
              // style={styles.icon}
            >
              <FontAwesome5 name="pills" size={83} color="grey" />
              {/* <FontAwesome5 name="pills" size={83} color="#146C94" /> */}
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>
              Medications list
            </Text>
          </View>
          {/* Button Medical history*/}
          <View style={styles.container}>
            <Pressable
              // onPress={() => props.navigation.navigate(screenName, { index })}
              style={[styles.icon, { borderColor: "grey" }]}
              // style={styles.icon}
            >
              <FontAwesome5 name="file-medical-alt" size={83} color="grey" />
              {/* <FontAwesome5 name="file-medical-alt" size={83} color="#146C94" /> */}
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>
              Medical history
            </Text>
          </View>
          {/* Button Disease*/}
          <View style={styles.container}>
            <Pressable
              onPress={() =>
                props.navigation.navigate({
                  name: "DiseaseScreen",
                  params: { index: index },
                })
              }
              style={styles.icon}
            >
              <FontAwesome5 name="disease" size={83} color="#146C94" />
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>Disease</Text>
          </View>
          {/* Button Allergy*/}
          <View style={styles.container}>
            <Pressable
              // onPress={() => props.navigation.navigate(screenName, { index })}
              style={[styles.icon, { borderColor: "grey" }]}
              // style={styles.icon}
            >
              <FontAwesome5 name="allergies" size={83} color="grey" />
              {/* <FontAwesome5 name="allergies" size={83} color="#146C94" /> */}
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>Allergy</Text>
          </View>
          {/* Button Symptoms*/}
          <View style={styles.container}>
            <Pressable
              // onPress={() => props.navigation.navigate(screenName, { index })}
              style={[styles.icon, { borderColor: "grey" }]}
              // style={styles.icon}
            >
              {/* <MaterialIcons name="sick" size={83} color="#146C94" /> */}
              <MaterialIcons name="sick" size={83} color="grey" />
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>Symptoms</Text>
          </View>
          {/* Button Measurement*/}
          <View style={styles.container}>
            <Pressable
              // onPress={() => props.navigation.navigate(screenName, { index })}
              style={[styles.icon, { borderColor: "grey" }]}
              // style={styles.icon}
            >
              <MaterialCommunityIcons
                name="tape-measure"
                size={80}
                // color="#146C94"
                color="grey"
              />
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>Measurement</Text>
          </View>
          {/* Button Vaccines*/}
          <View style={styles.container}>
            <Pressable
              // onPress={() => props.navigation.navigate(screenName, { index })}
              style={[styles.icon, { borderColor: "grey" }]}
              // style={styles.icon}
            >
              <MaterialCommunityIcons name="needle" size={83} color="grey" />
              {/* <MaterialCommunityIcons name="needle" size={83} color="#146C94" /> */}
            </Pressable>
            <Text style={{ margin: 10, textAlign: "center" }}>Vaccines</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  editButton: {
    padding: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0DAFF",
    borderRadius: 4,
    margin: 30,
    alignSelf: "center",
  },
  wrapper: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 5,
  },
  container: {
    height: windowWidth / 3,
    width: windowWidth / 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    borderColor: "#146C94",
    borderWidth: 2,
    borderRadius: windowWidth / 3,
  },
});

export default IndividualScreen;
