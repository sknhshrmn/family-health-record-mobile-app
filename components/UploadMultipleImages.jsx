import React, { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UploadMultipleImages() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(JSON.stringify(_image));
    if (!_image.canceled) {
      setImages([...images, _image.assets[0].uri]);
    }
  };
  return (
    <View style={imageUploaderStyles.container}>
      <TouchableOpacity
        onPress={pickImage}
        style={imageUploaderStyles.uploadBtnContainer}
      >
        <View style={imageUploaderStyles.uploadBtn}>
          <Text>Pick image</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        {images &&
          images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width: 275, height: 275, marginBottom: 10 }}
            />
          ))}
      </ScrollView>
    </View>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
  },
  uploadBtnContainer: {
    backgroundColor: "#B0DAFF",
    width: 275,
    height: 40,
    marginBottom: 10,
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderWidth: 1,
  },
});
