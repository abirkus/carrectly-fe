import React from 'react';
import serviceArray from '../data/services.json';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import {
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import BuildIcon from '@mui/icons-material/Build';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const iconsArr = [
  <StarIcon />,
  <LocalCarWashIcon />,
  <BuildIcon />,
  <DirectionsCarIcon />,
  <AirlineSeatReclineExtraIcon />,
  <AspectRatioIcon />,
  <CarRepairIcon />,
  <Inventory2Icon />,
  <CarRentalIcon />,
];

const Services = () => {
  const [expanded, setExpanded] = React.useState<string | false>('POPULAR');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Layout>
      <Grid container justifyContent="center" sx={{ padding: '25px 0 0 0' }}>
        {serviceArray.map((service, index) => (
          <Accordion
            key={`accordiong_id_${index}`}
            expanded={expanded === service.category}
            onChange={handleChange(service.category)}
            sx={{
              width: '90vw',
              margin: '10px',
              '.Mui-expanded': {
                backgroundColor: '#743794',
                color: 'white',
                ':hover': {
                  backgroundColor: '#743794',
                },
              },
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: '#e6e6e6',
                flexDirection: 'row',
                ':hover': {
                  backgroundColor: '#dddd',
                },
              }}
              expandIcon={<ExpandMoreIcon color="inherit" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: '2rem',
                  },
                }}
              >
                {iconsArr[index]}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  letterSpacing: '.1rem',
                }}
              >
                {service.category}
              </Box>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}
            >
              {service.services.map((el, i) => (
                <ServiceCard serviceObject={el} key={`service-card-id-${i}`} />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Layout>
  );
};

export default Services;
