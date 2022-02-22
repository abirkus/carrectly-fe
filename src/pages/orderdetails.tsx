import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { Store } from '../../utils/Store';
import { useForm, SubmitHandler } from 'react-hook-form';
import StepperComponent from 'components/Stepper/Stepper';
import { CustomerInformationForm } from 'components/Forms/CustomerInformationForm';
import { CarInformationFrom } from 'components/Forms/CarInformationForm';
import { AddressForm } from 'components/Forms/AddressForm';
import { ServiceDateForm } from 'components/Forms/ServiceDateForm';
import { OrderDetailsType } from '../../utils/types';

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { shippingAddress, modelCategories } = state;

  useEffect(() => {
    Object.keys(shippingAddress).map((key) =>
      setValue(key, shippingAddress[key as keyof OrderDetailsType])
    );
  }, [state]);

  const onSubmit: SubmitHandler<OrderDetailsType> = (data) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: data,
    });
    const small = ['Sedan', 'Coupe', 'Convertible', 'Wagon', 'Hatchback'];
    const medium = ['SUV'];
    const large = ['Van/Minivan', 'XL', 'Pickup'];

    const singleModel = modelCategories.find(
      (model) => model.Model === data.carModel
    );

    const category = singleModel?.Category.split(',') || ['Sedan'];
    let size = '';

    if (small.includes(category[0])) {
      size = 'small';
    } else if (medium.includes(category[0])) {
      size = 'medium';
    } else if (large.includes(category[0])) {
      size = 'large';
    }

    dispatch({
      type: 'SAVE_CAR_SIZE',
      payload: size,
    });

    router.push('/placeorder');
  };

  return (
    <Layout title="Shipping Address">
      <StepperComponent activeStep={1} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} width="100%">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CustomerInformationForm control={control} errors={errors} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CarInformationFrom
              control={control}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <AddressForm control={control} errors={errors} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ServiceDateForm control={control} watch={watch} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue to order summary
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
}
