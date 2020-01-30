import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome5";

// Icon.loadFont();

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
import RefreshControlComponent from "./pages/RefreshControlComponent";
import SafeAreaViewComponent from "./pages/SafeAreaViewComponent";
import ScrollViewComponent from "./pages/ScrollViewComponent";
import SectionListComponent from "./pages/SectionListComponent";
import SegmentedControlIOSComponent from "./pages/SegmentedControlIOSComponent";
import SliderComponent from "./pages/SliderComponent";
import TextInputComponent from "./pages/TextInputComponent";

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  FadeAnimation: {
    screen: FadeAnimation,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple-alt" size={20} color="#444" />,
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  },

  ClickAnimation: {
    screen: ClickAnimation,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  ImageComponent: {
    screen: ImageComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  ActivityindicatorComponent: {
    screen: ActivityindicatorComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  ButtonComponent: {
    screen: ButtonComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  DatePickerIOSComponent: {
    screen: DatePickerIOSComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  InputAccessoryViewComponent: {
    screen: InputAccessoryViewComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  MaskedViewIOS: {
    screen: MaskedViewIOS,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  ModalComponent: {
    screen: ModalComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  PickerComponent: {
    screen: PickerComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  RefreshControlComponent: {
    screen: RefreshControlComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  SafeAreaViewComponent: {
    screen: SafeAreaViewComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  ScrollViewComponent: {
    screen: ScrollViewComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  SectionListComponent: {
    screen: SectionListComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  SegmentedControlIOSComponent: {
    screen: SegmentedControlIOSComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  SliderComponent: {
    screen: SliderComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  },

  TextInputComponent: {
    screen: TextInputComponent,
    navigationOptions: () => ({
      drawerIcon: <Icon name="apple" size={20} color="#444" />
    })
  }
});

export default createAppContainer(mainNavigation);
