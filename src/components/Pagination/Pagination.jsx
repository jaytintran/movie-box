import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './styles';

function Pagination({ currentPage, totalPages, setPage }) {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  console.log(totalPages);

  return (
    <div className={classes.container}>
      <Button className={classes.button} variant="contained" color="primary" type="button" onClick={handlePrev}>
        Prev
      </Button>
      <Typography variant="h5" className={classes.pageNumber}>{currentPage} / {totalPages}</Typography>
      <Button className={classes.button} variant="contained" color="primary" type="button" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
