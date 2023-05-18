import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

const valueWidth = Dimensions.get("window").width;

function Requests({ rq, changeRq }) {
  const [tmp, setTmp] = useState([]);
  const pressRqButton = (title) => {
    setTmp(rq.filter((item) => item !== title));
  };
  useEffect(() => {
    changeRq(tmp);
  }, [tmp]);
  const Item = ({ title }) => (
    <Pressable style={styles.rqButton} onPress={() => pressRqButton(title)}>
      <Text style={styles.buttonRqText}>{title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.rqContainer}>
      <FlatList
        data={rq}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item, index) => index}
        numColumns={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rqContainer: {
    marginBottom: "3%",
  },
  rqButton: {
    width: "auto",
    height: valueWidth * 0.05,
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    marginHorizontal: valueWidth * 0.01,
    backgroundColor: "#C0C0C0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRqText: {
    fontSize: 16,
    color: "black",
  },
});

export default Requests;
