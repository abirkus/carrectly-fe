import React, { useContext } from 'react';
import { Store } from '../../../../utils/Store';
import { Button, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRowModel } from '@mui/x-data-grid';
import { ServiceType } from '../../../../utils/types';
import { styled } from '@mui/system';

interface CellAttributes {
  row: GridRowModel<ServiceType>;
}

const DeleteButton = styled(Button)(({ theme }) => ({
  marginRight: '10px',
  marginLeft: 'auto',
  textTransform: 'none',
  [theme.breakpoints.down('md')]: {
    '.MuiButton-startIcon': { margin: 0 },
    fontSize: 0,
    minWidth: '20px',
    margin: 0,
  },
}));

export const DeleteServiceCell: React.FC<CellAttributes> = ({ row }) => {
  const { dispatch } = useContext(Store);
  const removeItemHandler = (itemId: number) => {
    setTimeout(() => {
      dispatch({ type: 'CART_REMOVE_ITEM', payload: itemId });
    });
  };

  return (
    <DeleteButton
      variant="outlined"
      onClick={() => removeItemHandler(row.id)}
      startIcon={<DeleteIcon />}
    >
      Delete
    </DeleteButton>
  );
};

export const PriceRangeCell: React.FC<CellAttributes> = ({ row }) => {
  const { state } = useContext(Store);
  const { carSize } = state;

  let priceIndex = 0;
  if (carSize === 'large') {
    priceIndex = 2;
  }
  if (carSize === 'medium') {
    priceIndex = 1;
  }

  if (row.prices.length > 2) {
    return (
      <List sx={{ display: 'flex', flexDirection: 'row' }}>
        <ListItem key={`price-variant-${priceIndex}`}>
          ${row.prices[priceIndex]}
        </ListItem>
      </List>
    );
  }
  return (
    <List sx={{ display: 'flex', flexDirection: 'row' }}>
      <ListItem key={`price-variant-${priceIndex}`}>${row.prices[0]}</ListItem>
    </List>
  );
};
