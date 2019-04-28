/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Slider,
  SafeAreaView
} from "react-native";
import TrackPlayer from "react-native-track-player";
import { MainButton } from "../components/mainButton";

const piano = require("../res/audio/micke/Micke_PianoStycke_v05.mp3");
// const music = require("../res/audio/Example.mp3");

const drips = [
  require("../res/audio/droppar/Micke_SFXProject_dropp-enstaka_01.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_dropp-enstaka_02.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_dropp-enstaka_03.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_dropp-enstaka_04.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_dropp-enstaka_05.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_dropp-enstaka_06.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-07.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-08.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-09.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-10.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-11.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-12.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-13.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-14.mp3"),
  require("../res/audio/droppar/Micke_SFXProject_drops-15.mp3")
];
const footsteps = require("../res/audio/fotsteg/Micke_SFXProject_fotstegV2-snabbtTillStilla_02.mp3");

const birds = [
  {
    url: require("../res/audio/faglar/Micke_SFXProject_skogsfagel_01.mp3"),
    length: 30
  },
  {
    url: require("../res/audio/faglar/Micke_SFXProject_skogsfagel_02.mp3"),
    length: 28
  },
  {
    url: require("../res/audio/faglar/Micke_SFXProject_skogsfagel_03.mp3"),
    length: 19
  }
];

const children = [
  require("../res/audio/barnskratt/Micke_SFXProject_barnskratt_fadeIn-01.mp3"),
  require("../res/audio/barnskratt/Micke_SFXProject_barnskratt_fadeIn-02.mp3"),
  require("../res/audio/barnskratt/Micke_SFXProject_barnskratt_fadeIn-03.mp3"),
  require("../res/audio/barnskratt/Micke_SFXProject_barnskratt_fadeIn-04.mp3")
];

type Props = {};
export default class NowScreen extends Component<Props> {
  // static navigationOptions = { title: "Welcome", header: { visible: false } };
  static navigationOptions = {
    title: "Här & Nu"
    // headerMode: "none",
    // header: null
  };

  constructor() {
    super();
    this.state = {
      duration: 600,
      currentTrack: ""
    };
  }

  componentDidMount() {
    // Adds an event handler for the playback-track-changed event
    // this.onTrackChange = TrackPlayer.addEventListener(
    //   "playback-track-changed",
    //   async data => {
    //     const track = await TrackPlayer.getTrack(data.nextTrack);
    //     this.setState({ currentTrack: track.title });
    //   }
    // );
  }

  componentWillUnmount() {
    // Removes the event handler
    // this.onTrackChange.remove();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  play = duration => {
    // TrackPlayer.reset();
    // duration = this.state.duration;
    // // console.log("play");
    // // const maxDrips = 60;
    //
    // var tracks = [];
    // var currentDuration = 0;
    //
    // tracks.push({
    //   id: "footstep" + currentDuration,
    //   title: "footstep" + currentDuration,
    //   artist: "Micke",
    //   url: require("../res/audio/barnskratt/test/test0.mp3"),
    //   duration: 17
    // });
    //
    // tracks.push({
    //   id: "footstep" + currentDuration,
    //   title: "footstep" + currentDuration,
    //   artist: "Micke",
    //   url: require("../res/audio/barnskratt/test/test1.mp3"),
    //   duration: 17
    // });
    //
    // if (currentDuration < duration) {
    //   tracks.push({
    //     id: "footstep" + currentDuration,
    //     title: "footstep" + currentDuration,
    //     artist: "Micke",
    //     url: footsteps,
    //     duration: 17
    //   });
    //   currentDuration += 17;
    // }
    // // create random order:
    // var order = [];
    // for (var i = 0; i < drips.length; i++) {
    //   order.push(i);
    // }
    // this.shuffleArray(order);
    // for (let i = 0; i < drips.length; i++) {
    //   if (currentDuration < duration) {
    //     tracks.push({
    //       id: "drip" + currentDuration,
    //       title: "drip" + currentDuration,
    //       artist: "Micke",
    //       url: drips[order[i]],
    //       duration: 10
    //     });
    //     currentDuration += 10;
    //   }
    // }
    //
    // order = [];
    // for (var i = 0; i < birds.length; i++) {
    //   order.push(i);
    // }
    // this.shuffleArray(order);
    // console.log(order);
    // for (let i = 0; i < birds.length; i++) {
    //   if (currentDuration < duration) {
    //     tracks.push({
    //       id: "bird" + currentDuration,
    //       title: "bird" + currentDuration,
    //       artist: "Micke",
    //       url: birds[order[i]].url,
    //       duration: birds[order[i]].length
    //     });
    //     currentDuration += birds[order[i]].length;
    //   }
    // }
    //
    // order = [];
    // for (var i = 0; i < children.length; i++) {
    //   order.push(i);
    // }
    // this.shuffleArray(order);
    // for (let i = 0; i < children.length; i++) {
    //   if (currentDuration < duration) {
    //     tracks.push({
    //       id: "children" + currentDuration,
    //       title: "children" + currentDuration,
    //       artist: "Micke",
    //       url: children[order[i]],
    //       duration: 20
    //     });
    //     currentDuration += 20;
    //   }
    // }
    //
    // if (currentDuration < duration) {
    //   tracks.push({
    //     id: "piano" + currentDuration,
    //     title: "piano" + currentDuration,
    //     artist: "Micke",
    //     url: piano,
    //     duration: 175
    //   });
    // }
    //
    // TrackPlayer.add(tracks).then(function() {
    //   TrackPlayer.play();
    // });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Slider
          style={{ margin: 10 }}
          value={this.state.duration}
          onValueChange={val => this.setState({ duration: val })}
          minimumValue={10}
          maximumValue={600}
          step={1}
        />
        <Text>
          {Math.floor(this.state.duration / 60)}:{this.state.duration % 60}
        </Text>
        <TouchableHighlight style={{ margin: 100 }} onPress={this.play}>
          <Text>Play</Text>
        </TouchableHighlight>
        <Text>{this.state.currentTrack}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
