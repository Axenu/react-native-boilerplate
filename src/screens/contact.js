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
  TextInput,
  Switch
} from "react-native";
import { MainButton } from "../components/mainButton";

type Props = {};
export default class ContactScreen extends Component<Props> {
  static navigationOptions = {
    title: "Kontakt och länkar"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Har du fråger eller något skriv det här!</Text>
        <Text>Copyright 2019 Micke Gunnarsson</Text>
        <Text>Utvecklad av Axenu AB</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center"
    flexDirection: "column"
    // alignItems: "center"
    // justifyContent: "center"
  }
});
