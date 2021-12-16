import React, { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  LinkProps,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledCartIcon from '../StyledCartIcon/StyledCartIcon';

type Props = {
  title?: string;
};

const StyledLink = styled(Link)<LinkProps>({
  color: 'white',
  padding: 10,
});

const Layout: FC<Props> = ({ children, title }) => {
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
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          width: '100vw',
        }}
      >
        <AppBar position="static">
          {/* <Toolbar className={style.nav}> */}
          <Toolbar>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              sx={{ width: '100%' }}
            >
              <NextLink href="/" passHref>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  sx={{ width: 200 }}
                >
                  <Image
                    src="/images/home/logo.png"
                    alt="car wrench"
                    width={200}
                    height={50}
                    priority
                  />
                </Box>
              </NextLink>
              <NextLink href="/" passHref>
                <StyledLink>Home</StyledLink>
              </NextLink>
              <NextLink href="/about" passHref>
                <StyledLink>About</StyledLink>
              </NextLink>
              <NextLink href="/services" passHref>
                <StyledLink>Services</StyledLink>
              </NextLink>
              <NextLink href="/faq" passHref>
                <StyledLink>FAQ</StyledLink>
              </NextLink>
              <NextLink href="/cart" passHref>
                <StyledLink>
                  <StyledCartIcon />
                </StyledLink>
              </NextLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Grid sx={{ margin: 0, padding: 0, minHeight: '90vh', width: '100vw' }}>
          {children}
        </Grid>
        <BottomNavigation
          showLabels
          value={'Developed by AB'}
          sx={{ backgroundColor: 'primary.main', width: '100vw' }}
        >
          <BottomNavigationAction
            label={<span>773.800.9085 | info@carrectly.com</span>}
            sx={{ color: 'white' }}
          />
          <StyledLink href="https://www.facebook.com/Carrectly" target="_blank">
            <BottomNavigationAction
              label="Facebook"
              showLabel
              sx={{ color: 'white' }}
              icon={<FacebookIcon color="secondary" />}
            />
          </StyledLink>
          <StyledLink href="https://twitter.com/Carrectly" target="_blank">
            <BottomNavigationAction
              label="Twitter"
              showLabel
              sx={{ color: 'white' }}
              icon={<TwitterIcon color="secondary" />}
            />
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/carrectly/"
            target="_blank"
          >
            <BottomNavigationAction
              label="Instagram"
              showLabel
              sx={{ color: 'white' }}
              icon={<InstagramIcon color="secondary" />}
            />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/company/carrectly/"
            target="_blank"
          >
            <BottomNavigationAction
              label="LinkedIn"
              showLabel
              sx={{ color: 'white' }}
              icon={<LinkedInIcon color="secondary" />}
            />
          </StyledLink>
        </BottomNavigation>

        {/* <Footer className={style.footer} /> */}
      </Box>
    </>
  );
};

export default Layout;
