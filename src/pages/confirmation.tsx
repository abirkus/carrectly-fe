import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';

const Confirmation = () => {
  return (
    <Layout title="Place Order">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          padding: '50px 0 50px 0',
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          fontWeight="bold"
          textAlign={'center'}
        >
          Hooray!!! We received your order and will be reaching out to you
          shortly.
        </Typography>
        <Box sx={{ display: 'relative', width: '60%' }}>
          <Image
            src="/images/home/happy-mechanic.png"
            alt="empty cart"
            layout="responsive"
            width={500}
            height={700}
            priority
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Confirmation;
