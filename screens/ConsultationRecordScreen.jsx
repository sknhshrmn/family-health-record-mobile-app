import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import consultationRecordSample from "../assets/consultationRecordSample";
import familyMember from "../assets/familyMembers";

function ConsultationRecordScreen({ route, navigation }) {
  const { index } = route.params;
  console.log(index);

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

  return (
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
        data={consultationRecordSample}
        renderItem={({ item }) => {
          let tempDate = item.date.toString().split(" ");
          return (
            <Pressable
              onPress={() =>
                // navigation.navigate({
                //   name:"EditDoctorAppointmentScreen",
                //   params: {
                //   date: item.date,
                //   place: item.place,
                //   doc: item.doc,}})
                alert(
                  "Details View and Edit/Remove functions are not implemented yet"
                )
              }
              style={styles.container}
            >
              {/* Date */}
              <View
                style={[
                  styles.item,
                  { display: "flex", flexDirection: "row", padding: 10 },
                ]}
              >
                <MaterialIcons name="date-range" size={24} color="black" />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {tempDate[0]}, {tempDate[1]} {tempDate[2]} {tempDate[3]}
                </Text>
              </View>
              {/* place */}
              <View
                style={[
                  styles.item,
                  { display: "flex", flexDirection: "row", padding: 10 },
                ]}
              >
                <MaterialIcons name="place" size={24} color="black" />
                <Text
                  style={{
                    fontStyle: "italic",
                    fontSize: 18,
                  }}
                >
                  {item.place}
                </Text>
              </View>
              {/* Doctor */}
              <View
                style={[
                  styles.item,
                  { display: "flex", flexDirection: "row", padding: 10 },
                ]}
              >
                <Fontisto name="doctor" size={24} color="black" />
                <Text
                  style={{
                    fontStyle: "italic",
                    fontSize: 18,
                    padding: 5,
                  }}
                >
                  {item.doc}
                </Text>
              </View>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 20, gap: 10 }} />}
      />
      {/* 'Add' button */}
      <Pressable
        styes={styles.addButton}
        onPress={() =>
          navigation.navigate({
            name: "AddConsultationRecordScreen",
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
    lineHeight: 25,
  },
  addButton: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35,
    // right: 35,
  },
});

export default ConsultationRecordScreen;
