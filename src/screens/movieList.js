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
  AsyncStorage,
  Image
} from "react-native";
import { MainButton } from "../components/mainButton";

import { definedURLS } from "../config/urls";

type Props = {};
export default class MovieListScreen extends Component<Props> {
  // static navigationOptions = { title: "Welcome", header: { visible: false } };
  static navigationOptions = {
    title: "Filmer"
    // headerMode: "none",
    // header: null
    // headerBackTitle: "bakåt"
  };

  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.getMoviesCache();
    this.fetchMovieList();
  }

  async getMoviesCache() {
    try {
      const value = await AsyncStorage.getItem("movies");
      if (value !== null) {
        this.setState({ movies: JSON.parse(value) });
      }
    } catch (error) {
      // Error retrieving data
      console.error(error);
    }
  }

  async fetchMovieList() {
    try {
      let response = await fetch(definedURLS["movie_list"], {});
      let responseJson = await response.json();
      this.setState({ movies: responseJson });
      AsyncStorage.setItem("movies", JSON.stringify(responseJson));
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }

  openMovie(movie) {
    // console.log("open video: ", video);

    // if (Linking.canOpenURL("youtube://" + url)) {
    //   Linking.openURL("youtube://" + url).catch(() => {
    //     Linking.openURL("https://" + url);
    //   });
    // } else {
    //   Linking.openURL("https://" + url);
    // }
    // console.log(this.props.navigation);
    console.log(movie);
    this.props.navigation.navigate("movie", { movie: movie });
  }

  renderVideos() {
    return this.state.movies.map((item, index) => {
      return (
        <TouchableHighlight
          key={index}
          onPress={() => this.openMovie(item)}
          style={styles.video}
        >
          <View style={styles.video}>
            <Image
              style={styles.thumbnail}
              source={{ uri: definedURLS["thumbnails"] + item["thumbnail"] }}
            />
            <Text style={styles.videoName}>{item["title"]}</Text>
          </View>
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.videoContainer}>{this.renderVideos()}</View>
        </ScrollView>
      </SafeAreaView>
    );
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
