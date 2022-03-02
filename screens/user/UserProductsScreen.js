import React from "react";
import { FlatList, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// Header Button
import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import Color from "../../constant/Color";
import * as productsAction from "../../store/actions/products";

const UserProductScreen = (props) => {
  const userProduct = useSelector((state) => state.products.userProduct);
  const dispatch = useDispatch();

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
  };
};
export default UserProductScreen;
