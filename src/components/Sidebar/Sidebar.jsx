import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import logo from './logo.png';
import logoDark from './logo-dark.png';
import genreIcons from '../../assets/genres';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenresQuery } from '../../services/TMDB';
import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function Sidebar() {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <>
      <Link
        to="/"
        className={classes.imageLink}
      >
        <img
          className={classes.image}
          alt="logo"
          src={theme.palette.mode === 'light' ? logo : logoDark}
        />
      </Link>

      <Divider />

      <List>
        <ListSubheader>Catergories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            to="/"
            className={classes.links}
          >
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
              <ListItemIcon style={theme.palette.mode === 'light' ? { color: 'dark' } : { color: 'light' }}>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} sx={{ fontWeight: 'bold' }}>
                {value}
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        { isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link
            key={name}
            to="/"
            className={classes.links}
          >
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon style={theme.palette.mode === 'light' ? { color: 'dark' } : { color: 'light' }}>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={name} sx={{ fontWeight: 'bold' }} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
