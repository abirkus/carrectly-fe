import React from 'react';
import { Grid, Link } from '@mui/material';
import { SxProps } from '@mui/system';
import Image from 'next/image';

const sponsors = [
  {
    name: 'ChicagoInno',
    image: '/images/Sponsors/ChicagoInno.png',
    link: 'https://www.americaninno.com/chicago/first-look/an-on-demand-car-repair-startup-keeps-you-from-spending-hours-in-the-auto-shop',
  },
  {
    name: 'Yelp',
    image: '/images/Sponsors/yelp.png',
    link: 'https://www.yelp.com/biz/Carrectly-chicago',
  },
  {
    name: 'AWS',
    image: '/images/Sponsors/aws.png',
    link: 'https://www.amazon.com/localservices/ya/sellerprofile/ref=vas_review_spp?sellerID=A146TOHEDK4ND0',
  },
  {
    name: 'Crains',
    image: '/images/Sponsors/crains.png',
    link: 'https://facebook.com/Carrectly',
  },
  {
    name: 'Medium',
    image: '/images/Sponsors/medium.png',
    link: 'https://medium.com/carrectly',
  },
  {
    name: 'BuiltInChicago',
    image: '/images/Sponsors/builtinchicago.png',
    link: 'http://www.builtinchicago.org/company/Carrectly',
  },
  {
    name: 'AngelList',
    image: '/images/Sponsors/angellist.png',
    link: 'https://angel.co/carrectly',
  },
  {
    name: 'CrunchBase',
    image: '/images/Sponsors/crunchbase.png',
    link: 'https://www.crunchbase.com/organization/carrectly',
  },
];

export const SponsorsRibbon: React.FC = () => {
  const gridStyle: SxProps = {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '5px',
    flexWrap: 'wrap',
  };

  return (
    <Grid
      container
      alignItems={'center'}
      sx={(theme) => ({
        backgroundColor: 'info.main',
        fontSize: '16px',
        fontWeight: 500,
        padding: '10px 40px',
        [theme.breakpoints.down('sm')]: {
          padding: '10px 20px',
          fontSize: '.8rem',
        },
      })}
    >
      <Grid item xs={12} md={12} sx={{ ...gridStyle }}>
        {sponsors.map((singleSponsor, index) => (
          <Link
            href={singleSponsor.link}
            target="_blank"
            key={`sponsor-image-${index}`}
            sx={{
              width: '172px',
              minHeight: '50px',
              position: 'relative',
            }}
          >
            <Image
              src={singleSponsor.image}
              alt={singleSponsor.name}
              layout="fill"
              objectFit="contain"
            />
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};
