import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

import Home from "./pages/Home";
import FadeAnimation from "./pages/FadeAnimation";
import ClickAnimation from "./pages/ClickAnimation";
import ImageComponent from "./pages/ImageComponent";
import ActivityindicatorComponent from "./pages/ActivityindicatorComponent";
import ButtonComponent from "./pages/ButtonComponent";
import DatePickerIOSComponent from "./pages/DatePickerIOSComponent";
import InputAccessoryViewComponent from "./pages/InputAccessoryViewComponent";
import MaskedViewIOS from "./pages/MaskedViewIOS";
import ModalComponent from "./pages/ModalComponent";
import PickerComponent from "./pages/PickerComponent";

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
  },

  ImageComponent: {
    screen: ImageComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  ActivityindicatorComponent: {
    screen: ActivityindicatorComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  ButtonComponent: {
    screen: ButtonComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  DatePickerIOSComponent: {
    screen: DatePickerIOSComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  InputAccessoryViewComponent: {
    screen: InputAccessoryViewComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  MaskedViewIOS: {
    screen: MaskedViewIOS,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  ModalComponent: {
    screen: ModalComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  },

  PickerComponent: {
    screen: PickerComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#444" />
    })
  }
});

export default createAppContainer(mainNavigation);
