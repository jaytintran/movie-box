import { Grid } from '@mui/material';
import React from 'react';
import Movie from '../Movie/Movie';

import useStyles from './styles';

function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {
        movies.results.map((movie, index) => (
          <Movie key={index} movie={movie} i={index} />
        ))
      }
    </Grid>
  );
}

export default MovieList;
