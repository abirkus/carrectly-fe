import * as React from 'react';
import Image from 'next/image';
import { List, ListItem, Divider, ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StyledCarousel from '../StyledCarousel/StyledCarousel';
import { ModalProps } from '../../../utils/types';
import AddButton from '../Buttons/AddButton';
import { styled } from '@mui/system';

const ModalWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1000px',
  width: '50vw',
  maxHeight: '90vh',
  backgroundColor: 'white',
  boxShadow: '1px 3px 8px 0px rgb(0 0 0 / 20%)',
  [theme.breakpoints.down('md')]: {
    width: '80vw',
  },
}));

const ImageWrapper = styled('div')(() => ({
  position: 'relative',
  backgroundColor: 'black',
  width: '70%',
  aspectRatio: '16/9',
}));

export default function ServiceDetailsModal({
  open,
  onClose,
  serviceDetails,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper>
        <StyledCarousel autoplay dots={false} arrows arrowSpacing="15px">
          {serviceDetails.images.map((image, i) => (
            <ImageWrapper key={`card-slider-id-${i}`}>
              <Image
                src={image}
                alt={serviceDetails.name}
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
          ))}
        </StyledCarousel>
        <Box
          sx={(theme) => ({
            padding: '5px 10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            [theme.breakpoints.down('sm')]: { padding: '5px' },
          })}
        >
          <Typography
            id="modal-modal-title"
            component="h2"
            color="primary"
            sx={(theme) => ({
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              fontWeight: 600,
              opacity: 0.8,
              [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
              },
            })}
          >
            {serviceDetails.name}
          </Typography>

          <List
            id="modal-modal-description"
            sx={{ overflow: 'auto', padding: 0, fontSize: '1.5rem' }}
          >
            {serviceDetails.longDescription
              .split('✔')
              .map((description, index) => {
                if (description.length > 1) {
                  return (
                    <ListItem
                      key={`${serviceDetails.name}-${index}`}
                      alignItems="flex-start"
                      sx={(theme) => ({
                        paddingLeft: 0,
                        paddingRight: 0,
                        [theme.breakpoints.down('md')]: { paddingTop: 0 },
                      })}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          paddingRight: '5px',
                          margin: 0,
                          lineHeight: 1,
                        }}
                      >
                        &#9745;
                      </ListItemIcon>
                      <Typography>{description}</Typography>
                    </ListItem>
                  );
                }
              })}
          </List>

          <Divider sx={{ marginTop: '10px', marginBottom: '5px' }} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="5px 10px"
          >
            <Box display="flex" columnGap="50px" flexWrap="wrap">
              {serviceDetails.prices && (
                <Box display="flex" gap="10px">
                  <Typography fontWeight={600}>Price:</Typography>

                  {serviceDetails.prices.map((price, index) => (
                    <Typography key={`price-${index}`}>${price}</Typography>
                  ))}
                </Box>
              )}

              {serviceDetails.duration && (
                <Box display="flex" gap="10px">
                  <Typography fontWeight={600}>Time:</Typography>
                  <Typography>{serviceDetails.duration}</Typography>
                </Box>
              )}
            </Box>
            <AddButton serviceObject={serviceDetails} />
          </Box>
        </Box>
      </ModalWrapper>
    </Modal>
  );
}
