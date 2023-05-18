import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import TextTicker from "react-native-text-ticker";

const valueHeight = Dimensions.get("window").height;
const valueWidth = Dimensions.get("window").width;

function Preview({ navigation }) {
  const times = [2000, 1500, 1000, 500, 100];
  const [slideTime, setST] = useState(2000);
  const tabScreen = () => {
    setST((slideTime + 1) % 5);
    console.log(times[slideTime]);
  };
  return (
    <Pressable style={styles.pvContainer} onPress={tabScreen}>
      <TextTicker
        duration={times[slideTime]}
        bounce={false}
        bounceSpeed={0}
        bounceDelay={0}
        repeatSpacer={0}
        marqueeOnMount={true}
        marqueeDelay={0}
        disabled={true}
        style={styles.pvText}
      >
        프리뷰!
      </TextTicker>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pvContainer: {
    margin: 0,
    alignItems: "center",
    width: "100%",
    height: valueWidth ** 2 / valueHeight,
    backgroundColor: "grey",
  },
  pvText: {
    margin: 0,
    fontSize: valueWidth ** 2 / valueHeight - 30,
  },
});

export default Preview;
