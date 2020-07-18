import React, { useState } from 'react';
import ListManga from './ListManga';
import mangaList from './Data';

function List() {
  const [mangas, setMangas] = useState(mangaList);
  const [listFiltred, setListFiltred] = useState(mangaList);
  const [titre, setTitre] = useState('');

  function handleTitreChange(e) {
    setTitre(e.target.value);
    let currentList = [];
    let newList = [];
    if (e.target.value !== '') {
      currentList = mangas;
      newList = currentList.filter((item) => {
        const lc = item.titre.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = mangas;
    }
    setListFiltred(newList);
  }

  return (
    <>
      <h1>Liste</h1>
      <div>
        <label htmlFor="titre">Titre </label>
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          className="titre"
          value={titre}
          onChange={(e) => handleTitreChange(e)}
        />
      </div>
      <br />
      <ListManga lst={listFiltred} />
    </>
  );
}

export default List;
