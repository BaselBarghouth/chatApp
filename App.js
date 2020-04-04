import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import MainStackNavigator from "./src/Navigation/MainStackNavigator";
export default function App() {
  return <MainStackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
