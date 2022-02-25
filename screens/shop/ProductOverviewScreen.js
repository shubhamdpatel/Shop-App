import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

// Product Data
import ProductItem from "../../components/shop/ProductItem";

const productOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProduct);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {}}
          onAddtoCart={() => {}}
        />
      )}
    />
  );
};

productOverviewScreen.navigationOptions = {
  headerTitle: "All Product",
};
export default productOverviewScreen;
