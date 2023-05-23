import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Preview from "../components/home/Preview";
import Buttons from "../components/home/Buttons";
import Requests from "../components/Requests";

function Home({ navigation }) {
  const Logo = require("../../assets/yeogiyoLogo.png");
  const [rq, setRq] = useState([]);

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <Preview rq={rq} />

      <View style={styles.homeBody}>
        <Requests rq={rq} changeRq={(value) => setRq(value)} />
        <Buttons rq={rq} changeRq={(value) => setRq(value)} />
        <Button
          title="전광판 생성"
          onPress={() => navigation.navigate("Display")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    margin: "auto",
    width: "50%",
    height: 100,
    resizeMode: "contain",
  },
  homeBody: {
    padding: "5%",
  },
});

export default Home;
