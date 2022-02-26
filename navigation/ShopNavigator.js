import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

// Color
import Color from "../constant/Color";
import productOverviewScreen from "../screens/shop/ProductOverviewScreen";
import productDetailScreen from "../screens/shop/ProductDetailScreen";

const productsNavigator = createStackNavigator(
  {
    productOverview: productOverviewScreen,
    productDetail: productDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Color.primary,
    },
  }
);

export default createAppContainer(productsNavigator);
