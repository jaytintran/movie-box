import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import Pagination from '../Pagination/Pagination';
import useStyles from './styles';
import { useGetActorsDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

function Actor() {
  const history = useNavigate();
  const classes = useStyles();

  const [page, setPage] = useState(1);

  const { id } = useParams();
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history(-1)} color="primary">Go Back</Button>
        <Link to="/">Something goes wrong, please go back...</Link>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item lg={5} xl={4}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt={data?.name}
        />
      </Grid>

      <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant="h3" gutterBottom>
          {data?.name}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Born: {new Date(data?.birthday).toDateString()}
        </Typography>

        <Typography variant="body1" align="justify" gutterBottom>
          {data?.biography || 'Sorry no biography yet.'}
        </Typography>

        <Box marginTop="2rem" display="flex" justifyContent="space-around">
          <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>Read More</Button>
          <Button startIcon={<ArrowBack />} onClick={() => history(-1)} color="primary">Go Back</Button>
        </Box>

      </Grid>
      {/* SHOW MOVIE RECOMMENDATIONS */}
      <Box marginTop="5rem" width="100%">
        <Typography variant="h4" gutterBottom align="center">Also Appeared On</Typography>
        {
            movies
              ? <MovieList movies={movies} numberOfMovies={12} />
              : <Box>Sorry nothing was found</Box>
        }

        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </Grid>
  );
}

export default Actor;
