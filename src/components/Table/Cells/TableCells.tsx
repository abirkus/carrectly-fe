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
  return (
    <List sx={{ display: 'flex', flexDirection: 'row' }}>
      {props.row.price &&
        props.row.price.map(
          (
            el:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined,
            i: any
          ) => <ListItem key={`price-variant-${i}`}>${el}</ListItem>
        )}
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
