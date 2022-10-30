import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from './logo.png';

import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const mockCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horro' },
  { label: 'Animation', value: 'animation' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link
        to="/"
        className={classes.imageLink}
        style={{ display: 'flex', justifyContent: 'center', padding: '10% 0%',
        }}
      >
        <img
          className={classes.image}
          src={logo}
          alt="logo"
          style={{ width: '50%' }}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Catergories</ListSubheader>
        {mockCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img src={logo} className={classes.categoryIcon} height={30} />
              </ListItemIcon>
              <ListItemText primary={label}>
                {value}
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
