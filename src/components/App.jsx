import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import useStyles from './styles';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './index';

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* className={classes.toolbar}  */}
      <NavBar />
      <main className={classes.content}>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
