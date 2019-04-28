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
  TouchableHighlight
} from "react-native";
import { MainButton } from "../components/mainButton";

type Props = {};
export default class DonateScreen extends Component<Props> {
  // static navigationOptions = { title: "Welcome", header: { visible: false } };
  static navigationOptions = {
    title: "Bli sponsor!"
    // headerMode: "none",
    // header: null
    // headerBackTitle: "bakåt"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Här kan du donera till mig om du så önskar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
