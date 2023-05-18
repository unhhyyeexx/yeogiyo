import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Preview from "../components/home/Preview";

function Home({ navigation }) {
  const Logo = require("../../assets/yeogiyoLogo.png");
  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>

      <Preview />

      <View style={styles.homeBody}>
        <Text>Home!</Text>
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
    padding: "4%",
  },
});

export default Home;
