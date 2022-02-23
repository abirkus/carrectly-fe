import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Typography,
  Button,
  Card,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { fieldLabelsUI } from '../../../utils/helperFunctions';
import { OrderDetailsType } from '../../../utils/types';
import { Store } from '../../../utils/Store';
import moment from 'moment';

export const CustomerDetailsSummary: React.FC = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const { shippingAddress } = state;

  const editCustomerInfo = () => {
    router.push('/orderdetails');
  };

  return (
    <Card>
      <Typography component="h4" variant="h4" align="center">
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
                      <TableCell>
                        {fieldLabelsUI[key as keyof typeof fieldLabelsUI]}
                      </TableCell>
                      <TableCell>
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
      <Button
        onClick={editCustomerInfo}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Edit customer info
      </Button>
    </Card>
  );
};
