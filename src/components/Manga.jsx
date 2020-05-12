import React from 'react';

export default function Manga(props) {
  const { data: manga, handleStatusChange, handleDelete } = props;
  return (
    <>
      <input
        type="checkbox"
        checked={manga.aChercher}
        onChange={() => handleStatusChange(manga.id)}
      />
      <li key={manga.id}>
        {manga.titre} {manga.fini ? 'F' : 'EC'}
      </li>
      <button type="submit" onClick={() => handleDelete(manga.id)}>
        x
      </button>
    </>
  );
}
