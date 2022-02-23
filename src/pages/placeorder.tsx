import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  Card,
  ListItem,
} from '@mui/material';
import { useRouter } from 'next/router';
import StepperComponent from '../components/Stepper/Stepper';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ServicesDataTable from 'components/Table/ServicesDataTable';
import orderSummaryColumns from 'components/Table/Columns/OrderSummaryColumns';
import { CustomerDetailsSummary } from 'components/Table/CustomerDetailsSummary';
import { ServiceType } from '../../utils/types';

function PlaceOrder() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cartItems, shippingAddress } = state;
  const [loading, setLoading] = useState(false);
  const basicCartItems = cartItems.map((item: ServiceType) => {
    return { id: item.id, price: item.prices[0] }; // temporarily using prices array
  });
  const { firstName, lastName, email, phoneNumber, ...orderInfo } =
    shippingAddress;

  const customerInfo = {
    firstName,
    lastName,
    email,
    phoneNumber: Number(phoneNumber),
  };
  (orderInfo as any).hash = uuidv4();

  const totalPrice = () => {
    return cartItems.reduce((subTotal, service) => {
      return subTotal + (service.prices ? service.prices[0] : 0);
    }, 0);
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart');
    }
  }, []);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      await axios.post('/api/sendOrder', {
        services: basicCartItems,
        customer: customerInfo,
        order: orderInfo,
      });

      dispatch({ type: 'CART_CLEAR' });

      setLoading(false);
      router.push('/confirmation');
    } catch (err) {
      setLoading(false);
    }
  };

  const editServicesHandler = () => {
    router.push('/cart');
  };

  return (
    <Layout title="Place Order">
      <StepperComponent activeStep={2}></StepperComponent>

      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <CustomerDetailsSummary />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <Typography component="h4" variant="h4" align="center">
              Order Summary
            </Typography>

            <ServicesDataTable
              cartItemsArray={cartItems}
              columns={orderSummaryColumns}
            />
            <Grid container>
              <Grid item xs={6}>
                <Typography>
                  <strong>Estimated total:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  <strong>${totalPrice()}</strong>
                </Typography>
              </Grid>
            </Grid>

            <Button
              onClick={placeOrderHandler}
              variant="contained"
              color="primary"
              fullWidth
            >
              Place Order
            </Button>
            {loading && (
              <ListItem>
                <CircularProgress />
              </ListItem>
            )}
            <Button
              onClick={editServicesHandler}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Edit Services
            </Button>
          </Card>
          <Typography>
            Once the order is placed we will reach out to you via text to
            confirm order details and to coordinate vehicle pickup times. Due to
            increasingly high service volume, please allow a few hours for our
            logistics team to process your booking request.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
