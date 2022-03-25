import React, { FC, useContext } from 'react';
import dynamic from 'next/dynamic';
import StyledEmotionButton from './StyledEmotionButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Store } from '../../../utils/Store';
import { ServiceObject } from '../../../utils/types';
import { ServiceType } from '../../../utils/types';

const AddButton: FC<ServiceObject> = ({ serviceObject }) => {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state;

  const addToCartHandler = async (product: ServiceType) => {
    dispatch({ type: 'CART_ADD_ITEM', payload: product });
  };
  const removeFromCartHandler = async (product: ServiceType) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: product.id });
  };

  const inCart = cartItems.find(({ id }) => id === serviceObject.id);
  if (inCart) {
    return (
      <StyledEmotionButton
        handleClick={() => removeFromCartHandler(serviceObject)}
        bgColor="#339c53"
        textColor="#fff"
      >
        Added <CheckCircleOutlinedIcon fontSize="small" />
      </StyledEmotionButton>
    );
  } else {
    return (
      <StyledEmotionButton
        handleClick={() => addToCartHandler(serviceObject)}
        bgColor="rgb(116, 55, 148)"
        textColor="#fff"
      >
        Add <AddCircleOutlineIcon fontSize="small" />
      </StyledEmotionButton>
    );
  }
};

export default dynamic(() => Promise.resolve(AddButton), {
  ssr: false,
});
