import Order from "../../models/order";

export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

export const fetchOrder = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://shop-app-6628f-default-rtdb.firebaseio.com/orders/u1.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }

      const resData = await response.json();
      const loadedOrders = [];

      for (const key in resData) {
        loadedOrders.push(
          new Order(
            key,
            resData[key].cartItems,
            resData[key].totalAmounts,
            new Date(resData[key].date)
          )
        );
      }
      dispatch({ type: SET_ORDER, orders: loadedOrders });
    } catch (err) {
      throw err;
    }
  };
};
export const addOrder = (cartItems, totalAmounts) => {
  return async (dispatch) => {
    // save the data on firebase
    const date = new Date();
    const response = await fetch(
      "https://shop-app-6628f-default-rtdb.firebaseio.com/orders/u1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          totalAmounts,
          date: date.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Somrthing went wrong!");
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmounts,
        date: date,
      },
    });
  };
};
