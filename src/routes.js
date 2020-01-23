import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

import Home from "./pages/Home";
import FadeAnimation from "./pages/FadeAnimation";
import ClickAnimation from "./pages/ClickAnimation";

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <Icon name="lock" size={20} color="#444" />
    })
  },
  FadeAnimation: {
    screen: FadeAnimation,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },
  ClickAnimation: {
    screen: ClickAnimation,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  }
});

export default createAppContainer(mainNavigation);
