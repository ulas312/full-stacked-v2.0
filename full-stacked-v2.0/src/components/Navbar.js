import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px='20px'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '100pt', marginTop: '10pt', marginLeft: '1pt' }}
        />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#2336E4',
            borderBottom: '3px solid #2336E4',
          }}
        >
          Home
        </Link>
        <Link
          to='#exercises'
          style={{ textDecoration: 'none', color: '#2336E4' }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
