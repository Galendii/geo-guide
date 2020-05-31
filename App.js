//Packages
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//Styles
// import { Container } from './styles';

//Pages and Components
import CountriesScreen from "./src/pages/CountriesScreen";
import ContinentsScreen from "./src/pages/ContinentsScreen";
import LanguagesScreen from "./src/pages/LanguagesScreen";
import MapComponent from "./src/components/MapComponent";
import MapView from "react-native-maps";

//Code
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

const App = () => {
  if (Platform.OS === "android") {
    // only android needs polyfill
    require("intl"); // import intl object
    require("intl/locale-data/jsonp/de-DE"); // load the required locale details
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="countries"
          component={CountriesScreen}
          options={{ title: "Country's Capitals" }}
        />
        <Drawer.Screen
          name="continents"
          component={ContinentsScreen}
          options={{ title: "Country per Continent" }}
        />
        <Drawer.Screen
          name="languages"
          component={LanguagesScreen}
          options={{ title: "Languages per Country" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
