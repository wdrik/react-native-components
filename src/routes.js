import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

import Home from "./pages/Home";
import Teste from "./pages/Teste";

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <Icon name="lock" size={20} color="#Da552f" />
    })
  },
  Teste: {
    screen: Teste,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#Da552f" />
    })
  }
});

export default createAppContainer(mainNavigation);
