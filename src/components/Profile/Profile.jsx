import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import React from 'react';
import { useSelector } from 'react-redux';

// Get access to profile name or id from redux state and then try to display it

import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector((state) => state.user);
  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>

      {
        !favoriteMovies.length
          ? <Typography variant="h7">Add to Favorites or Watchlist to See Them Here.</Typography>
          : <Box>FAVORITE MOVIES</Box>
      }
    </Box>
  );
}

export default Profile;
