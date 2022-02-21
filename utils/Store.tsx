import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';
import { StateType, ActionType } from '../utils/types';

const initialState = {
  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems') as string)
    : [],
  carSize: Cookies.get('carSize')
    ? {
        ...JSON.parse(Cookies.get('carSize') as string),
      }
    : 'small',
  shippingAddress: Cookies.get('shippingAddress')
    ? {
        ...JSON.parse(Cookies.get('shippingAddress') as string),
        pickupDate: undefined,
        dropoffDate: undefined,
      }
    : {},
};

export const Store = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState as StateType,
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
        carSize: state.carSize,
        shippingAddress: state.shippingAddress,
      };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cartItems.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return {
        cartItems: cartItems,
        carSize: state.carSize,
        shippingAddress: state.shippingAddress,
      };
    }
    case 'SAVE_SHIPPING_ADDRESS':
      const data = action.payload;
      Cookies.set('shippingAddress', JSON.stringify({ ...data }));
      return {
        cartItems: [...state.cartItems],
        carSize: state.carSize,
        shippingAddress: {
          ...data,
        },
      };
    case 'SAVE_CAR_SIZE':
      const size = action.payload;
      Cookies.set('carSize', size);
      return {
        cartItems: [...state.cartItems],
        carSize: size,
        shippingAddress: { ...state.shippingAddress },
      };
    case 'CART_CLEAR':
      Cookies.remove('cartItems');
      return { ...state, cartItems: [] };
    default:
      return state;
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
