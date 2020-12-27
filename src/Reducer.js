// Data Layer logic goes

export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // reducerın başına consolelog eklemek önemli çünkü ne gelip gelmediğini kontrol ediyorsun
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        // need to return what the new data is
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      //Logic for empty Basket
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state, // everything currently inside the state
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
