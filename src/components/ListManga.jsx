import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Manga from './Manga';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

function ListManga({ lst }) {
  const classes = useStyles();

  return (
    <>
      <List dense className={classes.root}>
        {lst.map((manga) => (
          <Manga key={manga.id} data={manga} />
        ))}
      </List>
    </>
  );
}

export default ListManga;
