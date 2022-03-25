import React, { useState, FC } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import BgImage from '../BgImage/BgImage';
import StyledEmotionButton from '../Buttons/StyledEmotionButton';
import InfoIcon from '@mui/icons-material/Info';
import ServiceDetialsModal from '../Modal/ServiceDetailsModal';
import AddButton from '../Buttons/AddButton';
import { ServiceObject } from '../../../utils/types';
import { styled } from '@mui/system';

const Title = styled('div')(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  textTransform: 'uppercase',
  color: 'white',
  textAlign: 'left',
  margin: 0,
  zIndex: 15,
  [theme.breakpoints.down(400)]: {
    fontSize: '1.4rem',
  },
}));

const ServiceCard: FC<ServiceObject> = ({ serviceObject }) => {
  const [open, setOpen] = useState(false);
  const cardImage = serviceObject.images[0];
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BgImage
        backgroundImage={cardImage}
        sx={{
          width: '320px',
          height: '215px',
          margin: '5px',
          backgroundSize: 'cover',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignContent="space-between"
          sx={{
            width: '100%',
            height: '100%',
            padding: '10px',
            background:
              'linear-gradient(180deg, rgba(39, 39, 39, 0.8) 45%, rgba(39, 39, 39, 0) 94.67%)',
          }}
        >
          <Title>{serviceObject.name}</Title>
          <Typography variant="body1" color="#c9c9c9" fontWeight="bold">
            {serviceObject.shortDescription}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <StyledEmotionButton
              handleClick={handleOpen}
              bgColor="#fff"
              textColor="rgb(116, 55, 148)"
            >
              More <InfoIcon fontSize="small" />
            </StyledEmotionButton>
            <AddButton serviceObject={serviceObject} />
          </Box>
        </Box>
      </BgImage>
      <ServiceDetialsModal
        open={open}
        onClose={handleClose}
        serviceDetails={serviceObject}
      />
    </>
  );
};

export default ServiceCard;
