import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  StatusBar,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { WebView } from "react-native-webview";

export default function UploadMultipleFiles() {
  const [files, setFiles] = useState([]);
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: "application/*",
    });

    if (!result.canceled) {
      setFiles([...files, result.uri]);
    }
  };

  function getFileLines() {
    return files.map((file, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            File {index + 1} - {file}
          </Text>
          <Button
            style={styles.button}
            title="View"
            onPress={() => {
              // <WebView
              //   style={styles.container}
              //   source={{
              //     uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=${file}`,
              //   }}
              // />;
              alert("Try using webview, but not succeed yet!");
            }}
          ></Button>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          { backgroundColor: "#B0DAFF", padding: 10 },
          files
            ? { borderBottomWidth: 1, paddingBottom: 10 }
            : { borderBottomWidth: 0, paddingBottom: 0 },
        ]}
        onPress={pickFile}
      >
        <Text style={{ alignSelf: "center" }}>Select File</Text>
      </Pressable>
      {getFileLines()}
      <StatusBar style="auto" />
    </View>
  );
  r;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 275,
    borderWidth: 1,
  },
  uploadBtnContainer: {
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

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
});
