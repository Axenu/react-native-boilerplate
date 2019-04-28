/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  SafeAreaView
} from "react-native";
import { MainButton } from "../components/mainButton";

import Image from "react-native-scalable-image";

const images = [
  require("../res/images/examples/ex1.jpg"),
  require("../res/images/examples/ex2.jpg"),
  require("../res/images/examples/ex3.jpg"),
  require("../res/images/Background1.jpg")
];

const questions = [
  "Fråga1",
  "Fråga2",
  "Fråga3",
  "Fråga4",
  "Fråga5",
  "Fråga6",
  "Fråga7",
  "Fråga8",
  "Fråga9"
];

type Props = {};
export default class HomeWorkScreen extends Component<Props> {
  // static navigationOptions = { title: "Welcome", header: { visible: false } };
  static navigationOptions = {
    title: "Hemläxa"
    // headerMode: "none",
    // header: null
  };

  image_id = 0;
  question_id = 0;

  constructor() {
    super();
    this.image_id = Math.floor(Math.random() * images.length);
    this.question_id = Math.floor(Math.random() * questions.length);
  }

  // Måste vara här som man har en bild och en fråga... prova...

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            width={Dimensions.get("window").width - 20}
            height={Dimensions.get("window").height * 0.5}
            style={styles.image}
            source={images[this.image_id]}
            resizeMode="stretch"
          />
        </View>
        <Text>{questions[this.question_id]}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: "100%"
    flex: 1,
    // margin: 10,
    alignItems: "center",
    backgroundColor: "white",
    padding: 0
  },
  imageContainer: {
    // flex: 1
    // width: 100
    // height: 300
    // maxHeight: 300
    // margin: 10
  },
  image: {
    alignSelf: "center"
    // width: "auto",
    // height: 300
    // flex: 1
    // maxWidth: 100
    // maxHeight: 300
    // width: null,
    // aspectRatio: 1,
    // height: null,
    // resizeMode: "center",
    // alignSelf: "center"
    // height: 200,
    // aspectRatio: 1
    // width: "80%",
    // aspectRatio: 1
  }
});
