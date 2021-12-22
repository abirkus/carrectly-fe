import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useState, FC } from 'react';
import Typography from '@mui/material/Typography';
import BgImage from '../BgImage/BgImage';
import StyledEmotionButton from '../Buttons/StyledEmotionButton';
import InfoIcon from '@mui/icons-material/Info';
import ServiceDetialsModal from '../Modal/ServiceDetailsModal';
import AddButton from '../Buttons/AddButton';
import { ServiceObject } from '../../../utils/types';

//interfaces are used for objects and classes
//types are used for

const Title = styled.div`
  font-family: roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
  text-align: left;
  margin: 0;
  z-index: 15;
`;

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
    <div>
      <BgImage imgsrc={cardImage} imgalt="test">
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
          <Typography
            variant="body1"
            color="white"
            fontFamily="roboto, sans-serif"
          >
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
    </div>
  );
};

export default ServiceCard;
