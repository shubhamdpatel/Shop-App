import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// Header Button
import HeaderButton from "../../components/UI/HeaderButton";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.redableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-home" : "ios-home"}
          onPress={() => {
            navData.navigation.navigate("products");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
