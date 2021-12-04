import React, { FC, useContext } from 'react';
import dynamic from 'next/dynamic';
import StyledEmotionButton from './StyledEmotionButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Store } from '../../../utils/Store';

interface ServiceObject {
    serviceObject: ServiceCardProps;
  }
  
  interface ServiceCardProps {
    ID: string;
    SERVICE: string;
    PRICE: string;
    SHORTDESCRIPTION: string;
    LONGDESCRIPTION: string;
    IMAGE: string;
  }

const AddButton: FC<ServiceObject> = ({serviceObject}) => {
const { state, dispatch } = useContext(Store);
  const { cartItems } = state;

  const addToCartHandler = async (product: any) => {
    const { ID, SERVICE, IMAGE, PRICE } = product;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ID, SERVICE, IMAGE, PRICE } });
  };

  const inCart = cartItems.find(({ ID }) => Number(ID) === Number(serviceObject.ID));
  if (inCart) {
    return (
      <StyledEmotionButton bgColor="#339c53" textColor="#fff">
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