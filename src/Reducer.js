export const initialState = {
  basket: [],

  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => Number(item.price) + amount, 0);
};

export const getBasketMap = (basket) =>
  basket.reduce((array, item) => {
    let x = array.find((e) => e.id == item.id);
    if (!x) {
      item['amount'] = 1;
      array = array.concat(item);
    } else {
      x['amount']++;
    }

    return array;
  }, []);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`id ${action.id}가 장바구니에 존재하지 않습니다`);
      }

      return { ...state, basket: newBasket };

    case 'ADD_FROM_BASKET':
      const addIdx = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let addedBasket = [...state.basket];

      if (addIdx >= 0) {
        addedBasket.push(state.basket[addIdx]);
      } else {
        console.warn(`id ${action.id}가 장바구니에 존재하지 않습니다`);
      }

      return { ...state, basket: addedBasket };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    default:
      return { ...state };
  }
};

export default reducer;
