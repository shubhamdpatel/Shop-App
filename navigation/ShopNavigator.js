import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

// Color
import Color from "../constant/Color";
import productOverviewScreen from "../screens/shop/ProductOverviewScreen";

const productsNavigator = createStackNavigator(
  { productOverview: productOverviewScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : "",
      },
      heraderTintColor: Platform.OS === "android" ? "white" : Color.primary,
    },
  }
);

export default createAppContainer(productsNavigator);
