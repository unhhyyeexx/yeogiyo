import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home({ navigation }) {
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Home!</Text>
        <Button
          title="전광판 생성"
          onPress={() => navigation.navigate("Display")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

export default Home;
