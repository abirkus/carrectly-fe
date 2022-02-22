import { Button, List, ListItem, Box, Link } from '@mui/material';
import React, { useContext, FC, useState } from 'react';
import { Store } from '../../../../utils/Store';
import { GridRenderCellParams } from '@mui/x-data-grid';
import ServiceDetailsModal from '../../Modal/ServiceDetailsModal';

type cellAttributes = {
  props: GridRenderCellParams;
};

export const DeleteServiceCell: FC<cellAttributes> = ({ props }) => {
  const { dispatch } = useContext(Store);
  const removeItemHandler = (itemId: number) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: itemId });
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => removeItemHandler(props.row.id)}
    >
      x
    </Button>
  );
};

export const PriceRangeCell: FC<cellAttributes> = ({ props }) => {
  const { state } = useContext(Store);
  let whichPrice = 0;
  if (state.carSize === 'medium') {
    whichPrice = 1;
  } else if (state.carSize === 'large') {
    whichPrice = 2;
  }
  return (
    <List sx={{ display: 'flex', flexDirection: 'row' }}>
      <ListItem>${props.row.price[whichPrice]}</ListItem>
    </List>
  );
};

export const NameModalCell: FC<cellAttributes> = ({ props }) => {
  const serviceObject = props.row;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Link onClick={handleOpen}>{serviceObject.name}</Link>
      <ServiceDetailsModal
        open={open}
        onClose={handleClose}
        serviceDetails={serviceObject}
      />
    </Box>
  );
};
