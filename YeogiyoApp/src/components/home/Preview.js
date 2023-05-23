import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
// import TextTicker from "react-native-text-ticker";
import AutoScroll from "react-native-auto-scrolling";

const valueHeight = Dimensions.get("window").height;
const valueWidth = Dimensions.get("window").width;

function Preview({ rq }) {
  const [rqview, setRqview] = useState("");
  useEffect(() => {
    var tmp = "";
    rq.map((item) => {
      tmp += item + ",";
    });
    setRqview(tmp);
  }, [rq]);
  const times = [2500, 2300, 2000, 1500, 1000, 500, 100];
  const [slideTime, setST] = useState(2000);
  const tabScreen = () => {
    setST((slideTime + 1) % 7);
    console.log(times[slideTime]);
  };
  return (
    <Pressable style={styles.pvContainer} onPress={tabScreen}>
      {/* <TextTicker
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
        <Text>{rqview} 주세요!</Text>
      </TextTicker> */}

      <AutoScroll style={styles.pvScroll} duration={times[slideTime]} delay={0}>
        <Text style={styles.pvText}>{rqview}</Text>
      </AutoScroll>
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
  pvScroll: {
    width: "100%",
    height: "100%",
  },
  pvText: {
    margin: 0,
    fontSize: valueWidth ** 2 / valueHeight - 30,
  },
});

export default Preview;
