import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const valueHeight = Dimensions.get("window").height;
const valueWidth = Dimensions.get("window").width;

function Preview({ navigation }) {
  return (
    <View style={styles.pvContainer}>
      <Text>preview!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pvContainer: {
    margin: 0,
    width: "100%",
    height: valueWidth ** 2 / valueHeight,
    backgroundColor: "grey",
  },
});
export default Preview;
