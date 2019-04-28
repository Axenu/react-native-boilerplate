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
// import Video from "react-native-video";
// import TrackPlayer from "react-native-track-player";

const music = require("../res/audio/Example.mp3");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class DemoScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      shouldPlay: true,
      showVideo: false
    };
  }

  startPlaying = async () => {
    // TrackPlayer.add([
    //   {
    //     id: "abcdid", // Must be a string, required
    //
    //     url: music, // Load media from the
    //
    //     title: "Micke titel",
    //     artist: "Micke artist",
    //     album: "while(1<2)",
    //     genre: "Progressive House, Electro House",
    //     date: "2014-05-20T07:00:00+00:00" // RFC 3339
    //
    //     // artwork: 'http://example.com/avaritia.png', // Load artwork from the network
    //     // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
    //     // artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
    //   }
    // ]).then(function() {
    //   // The tracks were added
    //   // TrackPlayer.play();
    // });
  };

  playPause = async () => {
    console.log("play pause", this.state.shouldPlay);
    // this.setState({ shouldPlay: !this.state.shouldPlay });
    // TrackPlayer.pause();
    // let state = await TrackPlayer.getState();
    // this.setState({ shouldPlay: !this.state.shouldPlay, trackState: state });
    // if (state == TrackPlayer.STATE_PLAYING) {
    //   TrackPlayer.pause();
    // } else {
    //   TrackPlayer.play();
    // }

    // let position = await TrackPlayer.getPosition();
    // let buffered = await TrackPlayer.getBufferedPosition();
    // let duration = await TrackPlayer.getDuration();
    // console.log(position, duration);
  };

  renderVideo = () => {
    if (this.state.showVideo) {
      // return (
      //   <Video
      //     source={require("../res/video/sample.mp4")}
      //     style={{ width: 200, height: 200 }}
      //     muted={true}
      //     repeat={true}
      //     resizeMode={"cover"}
      //     volume={1.0}
      //     rate={1.0}
      //     ignoreSilentSwitch={"obey"}
      //     paused={this.state.shouldPlay}
      //   />
      // );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableHighlight onPress={this.playPause}>
          <Text>play/pause</Text>
        </TouchableHighlight>
        <Text>state: {this.state.shouldPlay ? "true" : "false"}</Text>
        <Text>state: {this.state.trackState}</Text>
        <TouchableHighlight onPress={this.startPlaying}>
          <Text>Add track</Text>
        </TouchableHighlight>
        {this.renderVideo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
