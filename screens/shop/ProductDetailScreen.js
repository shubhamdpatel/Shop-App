import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
// Color
import Color from "../../constant/Color";
// cart
import * as cartAction from "../../store/actions/cart";

const productDetailScreen = (props) => {
  const prodId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProduct.find((prod) => prod.id === prodId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={Color.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartAction.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.desctiption}>{selectedProduct.desctiption}</Text>
    </ScrollView>
  );
};

productDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  action: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  desctiption: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans",
  },
});

export default productDetailScreen;
