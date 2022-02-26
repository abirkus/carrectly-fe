import Layout from '../components/Layout/Layout';
import AboutCard from '../components/AboutCards/AboutCard';
import aboutInfoArray from '../data/about.json';
import { Box, Typography, Container } from '@mui/material';
import GoogleMapIframe from 'components/Map/GoogleMapIframe';

const about = () => {
  return (
    <Layout>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          component="div"
          color="text.secondary"
          padding="30px"
        >
          WHAT WE BELIEVE
        </Typography>

        <Typography
          gutterBottom
          component="div"
          align="center"
          paddingBottom="30px"
        >
          It all started with a personal problem of finding a reliable mechanic
          and taking a car for service in Chicago. Carrectly became a solution:
          a team that solves these universal hassles for others. We believe in
          innovation, simplicity and convenience and we resolve to reinvent the
          auto service industry.
        </Typography>
        <Typography
          gutterBottom
          component="div"
          align="center"
          paddingBottom="30px"
        >
          With more available technology and less free time, people’s
          expectations for quality and simplicity are higher than ever. Yet, the
          auto maintenance experience continues to lag behind. From professional
          highly-trained mechanics to the best auto detailers – we can guarantee
          the best quality service there can be. We do it all: hand car washes,
          car detailing, auto upholstery, mechanical shop repairs, auto body
          repairs, ceramic coating, paint protection film, tints, and more!
        </Typography>
        <Typography
          gutterBottom
          component="div"
          align="center"
          paddingBottom="30px"
        >
          Carrectly uses research, technology, and logistics to fix the lack of
          transparency and convenience of the auto maintenance business. We
          provide top-notch service for customers who value their time – one
          pickup, fantastic service, fair price, and drop-off at a time.
        </Typography>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          component="div"
          padding="30px"
          color="text.secondary"
        >
          WHAT DRIVES US
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {aboutInfoArray.map((el, i) => (
            <AboutCard info={el} key={`${el.title}-${i}`} />
          ))}
        </Box>
      </Container>
      <GoogleMapIframe />
    </Layout>
  );
};

export default about;
