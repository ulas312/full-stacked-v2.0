import React from 'react';
import HeroBannerImage from '../assets/images/banner.png';

import { Box, Stack, Typography, Button } from '@mui/material';

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#2336E4' fontWeight='600' fontSize='26px'>
        LIFT // TRACK // LIFT
      </Typography>
      <Typography
        fontWeight='700'
        sx={{ fontSize: { lg: '44px', sx: '40px' } }}
        mb='23px'
        mt='30px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{ backgroundColor: '#2336E4', padding: '10px' }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontStyle={600}
        color='#2336E4'
        sx={{ opacity: 0.1, display: { lg: 'Block', xs: 'none' } }}
        fontSize='200px'
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
}

export default HeroBanner;
