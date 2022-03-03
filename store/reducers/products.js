import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/productModel";
import {
  SET_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";

const initialState = {
  availableProduct: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerID === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        availableProduct: action.products,
        userProduct: action.products.filter((prod) => prod.ownerID === "u1"),
      };
    case CREATE_PRODUCT:
      const newProduct = new Product(
        action.productData.id,
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );

      return {
        ...state,
        availableProduct: state.availableProduct.concat(newProduct),
        userProduct: state.userProduct.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const productIndex = state.userProduct.findIndex(
        (prod) => prod.id === action.pid
      );

      const updatedProduct = new Product(
        action.pid,
        state.userProduct[productIndex].ownerID,
        action.productData.title,
        action.productData.imageurl,
        action.productData.description,
        state.userProduct[productIndex].price
      );
      const updatedUserProducts = [...state.userProduct];
      updatedUserProducts[productIndex] = updatedProduct;

      const availableProductIndex = state.availableProduct.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProduct];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;

      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProduct: state.userProduct.filter(
          (product) => product.id !== action.pid
        ),

        availableProduct: state.availableProduct.filter(
          (product) => product.id !== action.pid
        ),
      };
  }
  return state;
};
