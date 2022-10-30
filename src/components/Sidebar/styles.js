import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0%',
  },
  image: {
    width: '100px',
  },
}));

export default useStyles;
