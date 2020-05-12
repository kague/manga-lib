import React from 'react';

export default function Manga(props) {
  const { data: manga, handleDelete } = props;
  return (
    <>
      <input
        type="checkbox"
        checked={manga.aChercher}
        onChange={() => props.handleStatusChange(manga.id)}
      />
      <li key={manga.id}>
        {manga.titre} {manga.fini ? 'F' : 'EC'}
      </li>
      <button onClick={() => handleDelete(manga.id)}>x</button>
    </>
  );
}
