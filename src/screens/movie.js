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
  ScrollView,
  Linking,
  SafeAreaView,
  WebView,
  Dimensions
} from "react-native";
import { MainButton } from "../components/mainButton";
import YouTube from "react-native-youtube";

const videos = [
  { url: "vid1", name: "vid1" },
  { url: "vid2", name: "vid2" },
  { url: "vid3", name: "vid3" },
  { url: "vid4", name: "vid4" },
  { url: "vid5", name: "vid5" },
  { url: "vid6", name: "vid6" },
  { url: "vid7", name: "vid7" }
];

type Props = {};
export default class MovieScreen extends Component<Props> {
  // static navigationOptions = { title: "Welcome", header: { visible: false } };
  static navigationOptions = {
    title: "Filmer"
    // headerMode: "none",
    // header: null
    // headerBackTitle: "bakåt"
  };

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      movie: props.navigation.state.params.movie
    };

    // this.getMoviesFromApi();
  }

  async getMoviesFromApi() {
    try {
      let response = await fetch(
        "https://www.vimeo.com/api/v2/video/325615209.json",
        {
          // method: "POST",
          // headers: {
          //   Accept: "application/json",
          //   "Content-Type": "application/json"
          // },
          // body: JSON.stringify({
          //   firstParam: "yourValue",
          //   secondParam: "yourOtherValue"
          // })
        }
      );
      console.log(response);
      let responseJson = await response.json();
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // console.log(this.state.movie);
    webView = null;
    switch (this.state.movie.type) {
      case "vimeo":
        return (
          <WebView
            ref={ref => {
              this.videoPlayer = ref;
            }}
            style={{
              width: "100%",
              height: "100%",
              marginHorizontal: -5,
              marginVertical: -5,
              padding: 0,
              backgroundColor: "red",
              top: 0
            }}
            scalesPageToFit={true}
            source={{
              html:
                '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://player.vimeo.com/video/' +
                this.state.movie.id +
                '?autoplay=1" width="' +
                Dimensions.get("window").width +
                '" height="' +
                (Dimensions.get("window").height - 180) +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="margin: 0; padding: 0;"></iframe></html>'
            }}
            onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
            onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
          />
        );
        break;
      case "youtube":
        // console.log(this.state.movie);
        // webView = (
        //   <WebView
        //     ref={ref => {
        //       this.videoPlayer = ref;
        //     }}
        //     scalesPageToFit={true}
        //     source={{
        //       uri:
        //         "https://www.youtube.com/embed/" +
        //         this.state.movie.id +
        //         "?rel=0&autoplay=0&showinfo=0&controls=0"
        //     }}
        //     onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
        //     onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
        //   />
        // );
        return (
          <YouTube
            videoId={this.state.movie.id} // The YouTube video ID
            play={true} // control playback of video with true/false
            fullscreen={true} // control whether the video should play in fullscreen or inline
            loop={true} // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: "stretch", width: "100%", height: "100%" }}
          />
        );
      default:
        break;
    }
    return <SafeAreaView style={styles.container}>{webView}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollView: { width: "100%", height: "100%" },
  videoContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  video: {
    width: "50%",
    alignItems: "center"
  },
  thumbnail: {
    // width: "40%",
    width: 150,
    height: 100,
    // flex: 1,
    margin: 10,
    // aspectRatio: 2,
    backgroundColor: "black"
    // alignSelf: "center"
  }
});
