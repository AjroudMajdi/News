/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { HomeScreen } from "./src/screesns/home";

AppRegistry.registerComponent(appName, () => HomeScreen);
