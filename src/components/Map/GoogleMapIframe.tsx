import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  Grid,
  Container,
} from '@mui/material';

const GoogleMapIframe = () => {
  return (
    <Container>
      <Box>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 0px 40px 0',
          }}
        >
          <CardMedia
            component="iframe"
            sx={{ border: '0px' }}
            height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.201669311961!2d-87.63763688455857!3d41.888519779221355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2ac744df609%3A0x2ff52a1da777dcc1!2sCarrectly%20Auto%20Care!5e0!3m2!1sen!2sus!4v1644696086194!5m2!1sen!2sus"
          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item md={4} xs={6}>
                <List>
                  <ListItem>
                    <Typography gutterBottom variant="h5" component="div">
                      Contact
                    </Typography>
                  </ListItem>
                  <ListItem>(773) 800-9085</ListItem>
                </List>
              </Grid>
              <Grid item md={4} xs={6}>
                <List>
                  <ListItem>
                    <Typography gutterBottom variant="h5" component="div">
                      Address
                    </Typography>
                  </ListItem>
                  <ListItem>
                    We are on demand and can pick up your car from any location
                    in Chicagoland area
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List>
                  <ListItem>
                    <Typography gutterBottom variant="h5" component="div">
                      Business Hours
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Mon:</div> <div>8:00 AM - 5:00 PM</div>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Tue:</div> <div>8:00 AM - 5:00 PM</div>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Wed:</div> <div>8:00 AM - 5:00 PM</div>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Thu:</div> <div>8:00 AM - 5:00 PM</div>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Fri:</div> <div>8:00 AM - 5:00 PM</div>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Sat:</div> <div>8:00 AM - 2:00 PM</div>
                  </ListItem>
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <div>Sun:</div> <div>Closed</div>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default GoogleMapIframe;
