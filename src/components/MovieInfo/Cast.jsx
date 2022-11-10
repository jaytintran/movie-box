import React from 'react';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useGetCastingQuery } from '../../services/TMDB';

import useStyles from './styles';

function Cast() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetCastingQuery(id);
  const classes = useStyles();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something goes wrong, please go back...</Link>
      </Box>
    );
  }

  return (
    <Grid item container spacing={2}>
      {data && data?.cast?.map((character, i) => (
        character.profile_path && (
        <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'column' }}>
          <img
            className={classes.castImage}
            src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
            alt={character.name}
            style={{ maxHeight: '150px !important' }}
          />
          <Typography color="textPrimary" align="center">{character?.name}</Typography>
          <Typography color="textSecondary" align="center">
            {character.character.split('/')[0]}
          </Typography>
        </Grid>
        )
      )).slice(0, 6)}
    </Grid>
  );
}

export default Cast;
