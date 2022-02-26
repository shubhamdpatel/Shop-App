import { ADD_TO_CART } from "../actions/cart";
import cartItem from "../../models/cart-item";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProducts = action.product;
      const prodTitle = addedProducts.title;
      const prodPrice = addedProducts.price;

      let updatedOrNewCartItem;

      if (state.items[addedProducts.id]) {
        //   alreday have the item in cart
        const updatedOrNewCartItem = new cartItem(
          state.items[addedProducts.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProducts.id].sum + prodPrice
        );
      } else {
        const updatedOrNewCartItem = new cartItem(
          1,
          prodPrice,
          prodTitle,
          prodPrice
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProducts.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
  }
  return state;
};
