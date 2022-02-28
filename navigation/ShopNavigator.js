import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";

// Color
import Color from "../constant/Color";
import productOverviewScreen from "../screens/shop/ProductOverviewScreen";
import productDetailScreen from "../screens/shop/ProductDetailScreen";
import cartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrderScreen";

const defaultNavOptions = {
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
};

const ProductsNavigator = createStackNavigator(
  {
    productOverview: productOverviewScreen,
    productDetail: productDetailScreen,
    cart: cartScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Color.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
