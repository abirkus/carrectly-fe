import React from 'react';
import BgImage from '../BgImage/BgImage';
import howItWorksArr from 'data/howItWorks.json';
import StyledCarouselComponent from '../StyledCarousel/StyledCarousel';
import { Box, Typography } from '@mui/material';

export const HomeCarousel: React.FC = () => {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{
          marginBottom: '25px',
          marginTop: '25px',
          color: '#787878',
          letterSpacing: '24px',
          fontWeight: 700,
        }}
      >
        HOW IT WORKS
      </Typography>
      <BgImage
        backgroundImage="/images/home/car-1.jpg"
        mobileBackgroundImage="/images/home/mobile-sec-service.png"
        sx={(theme) => ({
          height: '800px',
          paddingTop: '120px',
          alignItems: 'flex-start',
          [theme.breakpoints.down('sm')]: {
            height: '500px',
            padding: 0,
            alignItems: 'center',
          },
        })}
      >
        <StyledCarouselComponent
          dots
          arrows
          effect="scrollx"
          arrowSpacing="-60px"
          sx={{
            width: '75vw',
            maxWidth: '400px',
          }}
        >
          {howItWorksArr.map((step, index) => (
            <Box key={`home-slider-id-${index}`}>
              <Typography
                variant="h2"
                align="center"
                color="white"
                fontWeight={600}
                marginBottom="10px"
                fontSize="3rem"
              >
                {index + 1}. {step.title}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="white"
                lineHeight={2}
                fontWeight={500}
                sx={(theme) => ({
                  [theme.breakpoints.down('sm')]: { fontSize: '1rem' },
                })}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </StyledCarouselComponent>
      </BgImage>
    </>
  );
};
