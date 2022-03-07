import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { styled, SxProps } from '@mui/system';

const IconLink = styled(Link)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  gap: '3px',
  '& .MuiSvgIcon-root': {
    fontSize: '25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
}));

export const Footer: React.FC = () => {
  const gridStyle: SxProps = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
    gap: '5px',
    flexWrap: 'wrap',
  };

  const copyRightFontSize = '0.8rem';

  return (
    <Grid
      container
      alignItems={'center'}
      sx={(theme) => ({
        backgroundColor: 'primary.main',
        minHeight: '60px',
        fontSize: '16px',
        fontWeight: 500,
        padding: '10px 40px',
        [theme.breakpoints.down('md')]: {
          marginBottom: '48px',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '10px 20px',
          fontSize: '.8rem',
        },
      })}
    >
      <Grid item xs={12} md={4} sx={gridStyle}>
        <IconLink href="tel:773.800.9085">
          <PhoneIcon />
          773.800.9085
        </IconLink>
        <Typography>|</Typography>
        <IconLink href="mailto:info@carrectly.com">
          <EmailIcon />
          info@carrectly.com
        </IconLink>
      </Grid>

      <Grid item xs={12} md={4} sx={{ ...gridStyle, gap: '18px' }}>
        <IconLink href="https://www.facebook.com/Carrectly">
          <FacebookIcon />
        </IconLink>

        <IconLink href="https://twitter.com/Carrectly">
          <TwitterIcon />
        </IconLink>

        <IconLink href="https://www.instagram.com/carrectly/">
          <InstagramIcon />
        </IconLink>

        <IconLink href="https://www.linkedin.com/company/carrectly/">
          <LinkedInIcon />
        </IconLink>
      </Grid>

      <Grid item xs={12} md={4} sx={gridStyle}>
        <Typography fontSize={copyRightFontSize}>
          Copyright © 2022 Carrectly
        </Typography>
        <Typography fontSize={copyRightFontSize}>·</Typography>
        <Link
          fontSize={copyRightFontSize}
          color="#ffff"
          href="termsAndConditions"
        >
          Terms & Conditions
        </Link>
        <Typography fontSize={copyRightFontSize}>·</Typography>
        <Link fontSize={copyRightFontSize} color="#ffff" href="privacyPolicy">
          Privacy Policy
        </Link>
      </Grid>
    </Grid>
  );
};
