import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';
import { StateType, ActionType } from '../utils/types';

const initialState = {
  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems') as string)
    : [],
  shippingAddress: Cookies.get('shippingAddress')
    ? JSON.parse(Cookies.get('shippingAddress') as string)
    : {},
};

export const Store = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const newCartItems = [...state.cartItems, newItem];
      Cookies.set('cartItems', JSON.stringify(newCartItems));
      return {
        cartItems: newCartItems,
        shippingAddress: state.shippingAddress,
      };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cartItems.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems, shippingAddress: state.shippingAddress };
    }
    case 'SAVE_SHIPPING_ADDRESS':
      const data = action.payload;
      Cookies.set('shippingAddress', JSON.stringify({ ...data }));
      return {
        cartItems: [...state.cartItems],
        shippingAddress: {
          ...data,
        },
      };
    case 'CART_CLEAR':
      Cookies.remove('cartItems');
      return { ...state, cartItems: [] };
    default:
      console.log('getting default state', state);
      return state;
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
