import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import IndividualScreen from "./screens/IndividualScreen";
import { Text, View } from "react-native";
import {} from "@expo/vector-icons";
import familyMember from "./assets/familyMembers";
import { Fontisto, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import AddPersonScreen from "./screens/AddPersonScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DoctorAppointmentScreen from "./screens/DoctorAppointmentScreen";
import AddDoctorAppointmentScreen from "./screens/AddDoctorAppointmentScreen";
import ConsultationRecordScreen from "./screens/ConsultationRecordScreen";
import AddConsultationRecordScreen from "./screens/AddConsultationRecordScreen";
import DiseaseScreen from "./screens/DiseaseScreen";
import AddDiseaseScreen from "./screens/AddDiseaseScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
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
const DrawerContent = (props) => (
  <DrawerContentScrollView>
    <View
      style={{
        backgroundColor: "#19A7CE",
        height: 160,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <FontAwesome5
        name="file-medical-alt"
        size={50}
        color="white"
        style={{ alignSelf: "center", paddingBottom: 20 }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          padding: 15,
        }}
      >
        Family Health Record
      </Text>
    </View>
    <View style={{ padding: 10 }}>
      <DrawerItemList {...props} />
    </View>
  </DrawerContentScrollView>
);
{
  /* Add Drawer.Navigation to a function.*/
}
function Root() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "My Family",
          headerStyle: {
            backgroundColor: "#19A7CE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {familyMember.map((familyMember, index) => {
        const individualScreenName = `IndividualScreen${index}`;
        const gender = familyMember.gender;
        const birthday = familyMember.birthday;

        return (
          <Drawer.Screen
            key={index}
            label={familyMember.nickname}
            name={individualScreenName}
            component={IndividualScreen}
            initialParams={{ index: index }}
            options={({ navigation }) => ({
              title:
                familyMember.nickname +
                " (" +
                calculate_age(birthday) +
                " years old)",
              headerStyle: {
                backgroundColor: "#19A7CE",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },

              drawerIcon: ({ color, size }) =>
                gender === "female" ? (
                  <Fontisto name="female" size={22} color="#146C94" />
                ) : (
                  <Fontisto name="male" size={22} color="#146C94" />
                ),
            })}
          />
        );
      })}
      <Drawer.Screen
        label="Add Person"
        name="AddPersonScreen"
        component={AddPersonScreen}
        options={{
          title: "Add person",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="adduser" size={26} color="#146C94" />
          ),

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        ></Stack.Screen>
        {/* Profile Screen */}
        <Stack.Screen
          label="ProfileScreen"
          name="ProfileScreen"
          component={ProfileScreen}
          initialParams={{ index: 0 }}
          options={{
            title: "Edit info",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
        {/* Doctor's Appointment Screen */}
        <Stack.Screen
          label="DoctorAppointmentScreen"
          name="DoctorAppointmentScreen"
          component={DoctorAppointmentScreen}
          initialParams={{ index: 0 }}
          options={{
            title: "Doctor's Appointment",
            headerStyle: {
              backgroundColor: "#19A7CE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
        {/* Add Doctor's Appointment Screen */}
        <Stack.Screen
          label="AddDoctorAppointmentScreen"
          name="AddDoctorAppointmentScreen"
          component={AddDoctorAppointmentScreen}
          options={{
            title: "Add Appointment",
            headerStyle: {
              backgroundColor: "#19A7CE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
        {/* Consultation Record Screen */}
        <Stack.Screen
          label="ConsultationRecordScreen"
          name="ConsultationRecordScreen"
          component={ConsultationRecordScreen}
          initialParams={{ index: 0 }}
          options={{
            title: "Consultation Record",
            headerStyle: {
              backgroundColor: "#19A7CE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
        {/* Add Consultation Record Screen */}
        <Stack.Screen
          label="AddConsultationRecordScreen"
          name="AddConsultationRecordScreen"
          component={AddConsultationRecordScreen}
          options={{
            title: "Add Consultation Record",
            headerStyle: {
              backgroundColor: "#19A7CE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
        {/* Disease Screen */}
        <Stack.Screen
          label="DiseaseScreen"
          name="DiseaseScreen"
          component={DiseaseScreen}
          options={{
            title: "Disease",
            headerStyle: {
              backgroundColor: "#19A7CE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
        {/* Add Disease Screen */}
        <Stack.Screen
          label="AddDiseaseScreen"
          name="AddDiseaseScreen"
          component={AddDiseaseScreen}
          initialParams={{ index: 0 }}
          options={{
            title: "Disease",
            headerStyle: {
              backgroundColor: "#19A7CE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
