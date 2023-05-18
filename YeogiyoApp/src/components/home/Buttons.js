import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";

const valueWidth = Dimensions.get("window").width;

function Buttons({}) {
  const [rq, setRq] = useState([]);
  const [sub, setSub] = useState([]);
  const images = [
    { id: 1, title: "맥주", kind: ["카스", "테라", "켈리", "칭따오"] },
    { id: 2, title: "소주", kind: ["참이슬", "처음처럼", "진로", "새로"] },
    { id: 3, title: "수저", kind: ["젓가락", "숫가락", "수저"] },
    { id: 4, title: "메뉴판", kind: [] },
    { id: 5, title: "물", kind: [] },
    { id: 6, title: "직원", kind: [] },
  ];

  // 버튼 누르면 rq(request)에 추가
  const pressButton = (title, id, kind) => {
    if ([1, 2, 3].includes(id)) {
      setSub(kind);
    } else {
      setRq(rq.concat([title]));
      setSub(kind);
    }
  };
  const pressSub = (title) => {
    setRq(rq.concat([title]));
  };

  // 버튼 Item 개별
  const Item = ({ title, id, kind }) => (
    <Pressable
      style={styles.button}
      onPress={() => pressButton(title, id, kind)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
  const SubItem = ({ title }) => (
    <Pressable style={styles.subButton} onPress={() => pressSub(title)}>
      <Text style={styles.subText}>{title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.majorContainer}>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Item title={item.title} id={item.id} kind={item.kind} />
          )}
          keyExtractor={(item, index) => index}
          numColumns={3}
        />
      </View>
      {/* {images.map(({ id, title, emoji }) => (
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      ))} */}
      <FlatList
        data={sub}
        renderItem={({ item }) => <SubItem title={item} />}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {},
  majorContainer: {
    marginBottom: "4%",
  },
  button: {
    width: valueWidth * 0.28,
    height: valueWidth * 0.25,
    paddingTop: "5%",
    paddingBottom: "5%",
    marginHorizontal: valueWidth * 0.01,
    marginVertical: valueWidth * 0.02,
    backgroundColor: "#F4C221",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 32,
  },
  subButton: {
    width: valueWidth * 0.41,
    height: valueWidth * 0.12,
    paddingTop: "2%",
    paddingBottom: "2%",
    marginHorizontal: valueWidth * 0.02,
    marginVertical: valueWidth * 0.01,
    backgroundColor: "#1FBCFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subText: {
    fontSize: 24,
  },
});

export default Buttons;
