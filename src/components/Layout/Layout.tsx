import React, { FC } from 'react';
import Head from 'next/head';
import { SponsorsRibbon } from 'components/Ribbon/SponsorsRibbon';
import { useRouter } from 'next/router';
import { Box, Grid } from '@mui/material';
import { Footer } from '../Footer/Footer';
import Header from 'components/Header/Header';

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({ children, title }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - Chicago Car Wash, Service and Maintenance that doesn't suck`
            : 'Carrectly Auto Care'}
        </title>
        <meta name="author" content="Andre Birkus" />
        <meta
          name="keywords"
          content="car wash, detailing, repair, on demand, deluxe, carwash, body shop, breakes, oil change, cleaning, delivery"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          property="og:title"
          content="Carrectly: Chicago Car Wash, Service and Maintenance That Doesn't Suck"
        />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        }}
      >
        <Header />
        <Grid
          sx={{
            margin: 'auto',
            padding: 0,
            width: '100%',
            maxWidth: '1500px',
            flexGrow: 1,
          }}
        >
          {children}
        </Grid>
        {currentPage === '/' ? <SponsorsRibbon /> : ''}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
