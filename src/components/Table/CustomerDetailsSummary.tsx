import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { fieldLabelsUI } from '../../../utils/helperFunctions';
import { OrderDetailsType } from '../../../utils/types';
import { Store } from '../../../utils/Store';
import moment from 'moment';
import { CardShadow } from 'components/StyledBaseComponents/CardShadow';

export const CustomerDetailsSummary: React.FC = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const { shippingAddress } = state;

  const editCustomerInfo = () => {
    router.push('/orderdetails');
  };

  return (
    <>
      <CardShadow>
        <Typography variant="h4" component="h4" margin="10px">
          Customer Details Summary
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {Object.keys(shippingAddress).reduce<React.ReactNode[]>(
                (tableRows, key) => {
                  const value = shippingAddress[key as keyof OrderDetailsType];
                  if (value) {
                    tableRows.push(
                      <TableRow key={key}>
                        <TableCell sx={{ fontWeight: 'bold' }}>
                          {fieldLabelsUI[key as keyof typeof fieldLabelsUI]}
                        </TableCell>
                        <TableCell sx={{ color: 'dimgray' }}>
                          {typeof value === 'string'
                            ? value
                            : 'Model' in value
                            ? value.Model
                            : moment(value).format('MM-DD-YY HH:00')}
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return tableRows;
                },
                []
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardShadow>
      <Button
        onClick={editCustomerInfo}
        variant="outlined"
        color="primary"
        fullWidth
        sx={{ marginTop: '20px' }}
      >
        Edit customer info
      </Button>
    </>
  );
};
