import React from 'react';
import Script from 'next/script';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';

const Confirmation = () => {
  return (
    <div>
      <Script
        id="gads-tracking-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          gtag('event', 'conversion', {
            'send_to': 'AW-877045767/7ZVOCJCq_K4DEIfQmqID',
            'value': 5.0,
            'currency': 'USD'
        });
          `,
        }}
      />
      <Layout title="Confirmation">
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
    </div>
  );
};

export default Confirmation;
