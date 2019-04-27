import React, { Component } from "react";
import { SafeAreaView } from "react-native";

import MainScreen from "../screens/main";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  MaterialTopTabBar
} from "react-navigation";

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView style={{ backgroundColor: props.style.backgroundColor }}>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

export const AppNavigator = createStackNavigator(
  {
    main: MainScreen
  },
  {
    initialRouteName: "main"
  }
);

// export const TabNavigator = createMaterialTopTabNavigator(
//   {
//     main: {
//       screen: MainScreen,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="image" color={tintColor} size={24} />
//         )
//       })
//     }
//   },
//   {
//     tabBarPosition: "bottom",
//     animationEnabled: true,
//     tabBarOptions: {
//     },
//     tabBarComponent: SafeAreaMaterialTopTabBar,
//     initialRouteName: "main"
//   }
// );
