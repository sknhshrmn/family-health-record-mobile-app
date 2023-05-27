import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading

    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (photo) {
    return (
      <View>
        <Image
          source={{ uri: photo }}
          style={{ width: 275, aspectRatio: 0.75 }}
        />
        <TouchableOpacity onPress={() => setPhoto(null)}>
          <Text>Open camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function handleCapture() {
    if (!Camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPhoto(photo.uri);
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCapture}
            style={{
              width: 35,
              height: 35,
              backgroundColor: "white",
              borderRadius: 100,
            }}
          ></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Ionicons
              name="ios-camera-reverse-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: 275,
    aspectRatio: 0.75,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: 325,
    marginLeft: 120,
  },
  button: {
    flex: 1,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
