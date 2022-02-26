import React from "react";
import { FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Product Data
import ProductItem from "../../components/shop/ProductItem";
// Cart
import * as cartAction from "../../store/actions/cart";
// Header Button
import HeaderButton from "../../components/UI/HeaderButton";

const productOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProduct);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {
            props.navigation.navigate("productDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddtoCart={() => {
            dispatch(cartAction.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

productOverviewScreen.navigationOptions = {
  headerTitle: "All Product",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        onPress={() => {}}
      />
    </HeaderButtons>
  ),
};
export default productOverviewScreen;
