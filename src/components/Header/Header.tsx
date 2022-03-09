import React from 'react';
import Image from 'next/image';
import { AppBar, Toolbar, Link, Box } from '@mui/material';
import NextLink from 'next/link';
import StyledCartIcon from '../StyledCartIcon/StyledCartIcon';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'white',
  padding: 10,
  fontSize: '1.1rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={(theme) => ({
            width: '100%',
            [theme.breakpoints.up('sm')]: { height: '80px' },
          })}
        >
          <NextLink href="/" passHref>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={(theme) => ({
                cursor: 'pointer',
                [theme.breakpoints.down('sm')]: { width: '150px' },
              })}
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
  );
};

export default Header;
