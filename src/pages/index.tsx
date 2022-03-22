import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Box, Typography, Fab, CircularProgress } from '@mui/material';
import Layout from '../components/Layout/Layout';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import CustomReviewCard from 'components/CustomerReviews/CustomReviewCard';
import { styled } from '@mui/system';
import { HomeCarousel } from 'components/homeCarousel/homeCarousel';

const StyledFab = styled(Fab)(({ theme }) => ({
  zIndex: 20,
  margin: '0px',
  top: 'auto',
  right: '25px',
  bottom: '70px',
  fontSize: '2rem',
  left: 'auto',
  position: 'fixed',
  backgroundColor: '#511bd6',
  [theme.breakpoints.down('md')]: {
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: 0,
  },
}));

const IconStyle = {
  color: 'white',
  opacity: 0.8,
  stroke: 'white',
  fontSize: '2rem',
};

const Home: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [reviewsArray, setReviews] = useState([]);
  const handleNewBookingClick = () => {
    router.push('/services');
  };

  useEffect(() => {
    setLoading(true);
    const fetchReviews = async () => {
      const { data } = await axios.get('/api/getReviews');
      setReviews(data.reviews);
    };
    fetchReviews().finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <Image
        src="/images/home/home_background.png"
        alt="car shampoo"
        layout="responsive"
        width={700}
        height={425}
        priority
      />
      <HomeCarousel />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          overflow: 'auto',
          margin: '20px 0 20px 0',
        }}
      >
        {loading && <CircularProgress />}
        {Array.isArray(reviewsArray) &&
          reviewsArray.map((singleReview, index) => (
            <CustomReviewCard
              key={`review-id-${index}`}
              review={singleReview}
            />
          ))}
      </Box>

      <StyledFab
        aria-label={'Add'}
        size="large"
        variant="extended"
        onClick={() => handleNewBookingClick()}
      >
        <AddIcon sx={IconStyle} />
        <Typography
          variant="h4"
          component="h4"
          color="white"
          margin="10px"
          marginLeft="5px"
        >
          Request Services
        </Typography>
      </StyledFab>
    </Layout>
  );
};

export default Home;
