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
  Switch,
  SafeAreaView
} from "react-native";
import { MainButton } from "../components/mainButton";

type Props = {};
export default class QuestionScreen extends Component<Props> {
  // static navigationOptions = { title: "Welcome", header: { visible: false } };
  static navigationOptions = {
    title: "Ställ en fråga!"
    // headerMode: "none",
    // header: null
    // headerBackTitle: "bakåt"
  };
  constructor(props) {
    super(props);
    this.state = {
      sender: "",
      content: "",
      private: true
    };
  }

  // test contact
  sendEmail = async () => {
    if (this.state.sender == "" || this.state.content == "") {
      console.log("not valid input");
      return;
    }
    try {
      let res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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"
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: "simonseregon@gmail.com" }] }],
          from: { email: "simon@axenu.com" },
          subject: this.state.private ? "PRIVATE MESSAGE" : "Public message",
          content: [
            {
              type: "text/plain",
              value:
                this.state.content + "\n\rSent from email: " + this.state.sender
            }
          ],
          reply_to: { email: this.state.sender }
        })
      });
      console.log("test email", res);
    } catch (e) {
      console.error(e);
      // console.log("test email", e);
    }
    // console.log("test email");
    // console.log(res);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Har du fråger eller något skriv det här!</Text>
        <TextInput
          style={styles.text}
          onChangeText={text => this.setState({ sender: text })}
          value={this.state.text}
          textContentType="emailAddress"
          returnKeyType="next"
          placeholder="email"
        />
        <TextInput
          style={[styles.text, styles.textLarge]}
          onChangeText={text => this.setState({ content: text })}
          value={this.state.text}
          scrollEnabled={true}
          multiline={true}
          returnKeyType="done"
          placeholder="Din fråga"
        />
        <View>
          <Text>
            Ska din fråga vara privat eller får den finnas med, utan namn i vårt
            FAQ?
          </Text>
          <Switch
            value={this.state.private}
            onValueChange={i => this.setState({ private: i })}
          />
          <Text>
            Nuvarande värde {this.state.private ? "Privat" : "Publik"}
          </Text>
        </View>
        <View style={styles.send} onPress={this.sendEmail}>
          <Text style={styles.sendText}>Skicka frågan</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center"
    flexDirection: "column",
    // alignItems: "center"
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  textLarge: { height: 160 },
  send: {
    padding: 10,
    backgroundColor: "rgb(47, 80, 86)",
    alignSelf: "flex-start"
    // flex: 0
  },
  sendText: {
    color: "white"
  }
});
