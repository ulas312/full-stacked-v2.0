import React from 'react';

import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

export const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #2336E4' : '',
        borderBottomLeftRadius: '20px',
        backgroundColor: '#fff',
        width: '270px',
        height: '270px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt='Dumbbell Icon'
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#2336E4'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  );
};
