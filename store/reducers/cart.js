import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

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
        updatedOrNewCartItem = new CartItem(
          state.items[addedProducts.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProducts.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProducts.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItem;
      if (currentQty > 1) {
        //need reduce it,not erace it
        updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItem = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItem = { ...state.items };
        delete updatedCartItem[action.pid];
      }
      return {
        ...state,
        items: updatedCartItem,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
  }
  return state;
};
