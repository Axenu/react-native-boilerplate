/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

type Props = {
  text: String
};
export class MainButton extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(47, 80, 86)",
    width: "20%",
    aspectRatio: 1,
    borderRadius: 100,
    marginHorizontal: "5%",
    // margin: "5%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
    // marginTop: 15
  },
  text: {
    // backgroundColor: "green",
    color: "white",
    textAlign: "center",
    fontSize: 13,
    padding: 10
  }
});
