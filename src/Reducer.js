export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      console.log(state);
      console.log(action);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      console.log(newBasket);
      console.log(index);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`id ${action.id}가 장바구니에 존재하지 않습니다`);
      }
      console.log(newBasket);
      console.log(index);
      return { ...state, basket: newBasket };

    default:
      return { ...state };
  }
};

export default reducer;
