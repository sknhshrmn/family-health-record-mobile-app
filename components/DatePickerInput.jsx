import React, { useState } from "react";
import { View, SafeAreaView, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

export default function DatePickerInput(date) {
  const [mydate, setDate] = useState(new Date());
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
      ? `${tempDate[0]}, ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : "";
  };

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
