import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import Color from "../constant/Color";
import { Ionicons } from "@expo/vector-icons";

import productOverviewScreen from "../screens/shop/ProductOverviewScreen";
import productDetailScreen from "../screens/shop/ProductDetailScreen";
import cartScreen from "../screens/shop/CartScreen";
import ordersScreen from "../screens/shop/OrderScreen";
import UserProductScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

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
    orders: ordersScreen,
    userProduct: UserProductScreen,
    editProduct: EditProductScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => {
//         <Ionicons
//           name={Platform.OS === "android" ? "md-create" : "ios-create"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />;
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: defaultNavOptions,
//   }
// );

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Color.primary,
//     },
//   }
// );

export default createAppContainer(ProductsNavigator);
