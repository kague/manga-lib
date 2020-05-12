import React from 'react';
import Manga from './Manga';

function ListManga(props) {
  const { handleStatusChange, handleDelete } = props;
  return (
    <ul>
      {props.lst.map((manga) => (
        <Manga
          key={manga.id}
          data={manga}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ListManga;
