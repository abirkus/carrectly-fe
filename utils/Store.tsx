import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';
import { StateType, ActionType } from '../utils/types';

const initialState = {
  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems') as string)
    : [],
  modelCategories: Cookies.get('modelCategories')
    ? JSON.parse(Cookies.get('modelCategories') as string)
    : [],
  carSize: Cookies.get('carSize') ? Cookies.get('carSize') : '',
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
        modelCategories: state.modelCategories,
        shippingAddress: state.shippingAddress,
        carSize: state.carSize,
      };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cartItems.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return {
        cartItems: cartItems,
        modelCategories: state.modelCategories,
        shippingAddress: state.shippingAddress,
        carSize: state.carSize,
      };
    }
    case 'SAVE_SHIPPING_ADDRESS':
      const data = action.payload;
      Cookies.set('shippingAddress', JSON.stringify({ ...data }));
      return {
        cartItems: state.cartItems,
        modelCategories: state.modelCategories,
        carSize: state.carSize,
        shippingAddress: {
          ...data,
        },
      };
    case 'SAVE_MODEL_CATEGORIES':
      const categoriesArray = action.payload;
      Cookies.set('modelCategories', JSON.stringify(categoriesArray));
      return {
        cartItems: state.cartItems,
        modelCategories: categoriesArray,
        carSize: state.carSize,
        shippingAddress: state.shippingAddress,
      };
    case 'SAVE_CAR_SIZE':
      const sizeString = action.payload;
      Cookies.set('carSize', sizeString);
      return {
        cartItems: state.cartItems,
        modelCategories: state.modelCategories,
        carSize: sizeString,
        shippingAddress: state.shippingAddress,
      };
    case 'CART_CLEAR':
      Cookies.remove('cartItems');
      return { ...state, cartItems: [], modelCategories: [], carSize: '' };
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
