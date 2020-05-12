import React from 'react';
import Manga from './Manga';

function ListManga(props) {
  console.log('props', props);

  return (
    <ul>
      {props.lst.map((manga) => (
        <Manga
          key={manga.id}
          data={manga}
          handleStatusChange={props.handleStatusChange}
        />
      ))}
    </ul>
  );
}

export default ListManga;
