import React from "react";
import { FlatList, Button, Alert, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// Header Button
import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import Color from "../../constant/Color";
import * as productsAction from "../../store/actions/products";
import * as authActions from "../../store/actions/auth";

const UserProductScreen = (props) => {
  const dispatch = useDispatch();
  const userProduct = useSelector((state) => state.products.userProduct);

  const editProductHandler = (id) => {
    props.navigation.navigate("editProduct", { productId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert("Are you sure ?", "Do you really want to delete this item ? ", [
      {
        text: "No",
        style: "default",
      },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(productsAction.deleteProduct(id));
        },
      },
    ]);
  };

  if (userProduct.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No products found, Maybe creating some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={userProduct}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={Color.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Color.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

UserProductScreen.navigationOptions = (navData) => {
  // const dispatch = useDispatch();
  return {
    headerTitle: "User Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={
            Platform.OS === "android"
              ? "md-add-circle-outline"
              : "ios-add-circle-outline"
          }
          onPress={() => {
            navData.navigation.navigate("editProduct");
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Logout"
          iconName={
            Platform.OS === "android"
              ? "md-log-out-outline"
              : "ios-log-out-outline"
          }
          onPress={() => {
            // dispatch(authActions.logout());
            navData.navigation.navigate("Auth");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default UserProductScreen;
