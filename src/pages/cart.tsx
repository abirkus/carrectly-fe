import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem
} from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import StepperComponent from '../components/Stepper/Stepper';

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  console.log("here is our state", state)
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async () => {
    // dispatch({ type: 'CART_ADD_ITEM', payload: { ...item } });
  };
  const removeItemHandler = () => {
    // dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const checkoutHandler = () => {
    router.push('/customerdetails');
  };
  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      <StepperComponent activeStep={0}/>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.{' '}
          <NextLink href="/services" passHref>
            <Link>Pick a service for your needs</Link>
          </NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                    <TableCell> Empty</TableCell>

                      <TableCell>
                        <Link>
                          <Typography>{item.SERVICE}</Typography>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        Quantity
                        {/* <Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))} */}
                        {/* </Select> */}
                      </TableCell>
                      <TableCell align="right">${item.PRICE}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler()}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  {/* <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography> */}
                </ListItem>
                <ListItem>
                  <Button
                    onClick={checkoutHandler}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });