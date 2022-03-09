import * as React from 'react';
import Image from 'next/image';
import { List, ListItem, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StyledCarousel from '../StyledCarousel/StyledCarousel';
import { ModalProps } from '../../../utils/types';
import AddButton from '../Buttons/AddButton';
const wrapper = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const carouselBackground = {
  width: 700,
  height: 425,
  position: 'relative',
  background: 'rgba(0,0,0,1)',
};

export default function ServiceDetailsModal({
  open,
  onClose,
  serviceDetails,
}: ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={wrapper}>
          <StyledCarousel autoplay dots={false} arrows arrowSpacing="15px">
            {serviceDetails.images.map((image, i) => (
              <Box sx={carouselBackground} key={`card-slider-id-${i}`}>
                <Image
                  src={image}
                  alt={serviceDetails.name}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            ))}
          </StyledCarousel>
          <Box sx={{ padding: '20px' }}>
            <Box sx={{ padding: '0 0 20px 0' }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {serviceDetails.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {serviceDetails.longDescription.split('✔').map((el: string) => {
                  if (el.length > 1) {
                    return <div key={el}>{`✔ ${el}`}</div>;
                  }
                })}
              </Typography>
            </Box>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Typography sx={{ mt: 2 }}>Price:</Typography>
              <List sx={{ display: 'flex', flexDirection: 'row' }}>
                {serviceDetails.prices &&
                  serviceDetails.prices.map((price, index) => (
                    <ListItem key={`price-variant-${index}`}>${price}</ListItem>
                  ))}
              </List>

              {/* need to update once we have the hours field in the data */}
              {false ? (
                <Typography sx={{ mt: 2 }}>
                  Time: ${serviceDetails.duration}
                </Typography>
              ) : (
                <div />
              )}
              <AddButton serviceObject={serviceDetails} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
