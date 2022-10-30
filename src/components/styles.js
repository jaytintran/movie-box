import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    paddingTop: '6rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    flexGrow: 1,
  },
}));

export default useStyles;
