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
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #ff2625',
              borderBottomLeftRadius: '20px',
              backgroundColor: '#fff',
              width: '270px',
              height: '270px',
              cursor: 'pointer',
              gap: '47px',
            }
          : ''
      }
    >
      <img
        src={Icon}
        alt='Dumbbell Icon'
        styles={{ width: '40px', height: '40px' }}
      />
    </Stack>
  );
};
