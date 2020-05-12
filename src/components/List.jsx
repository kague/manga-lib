import React, { useState, useEffect } from 'react';
import ListManga from './ListManga';
import MangaForm from './MangaForm';

const mangaList = [
  {
    id: 1,
    image: '',
    titre: 'Die & Retry',
    nombreLu: '5',
    nombrePos: '',
    nombreTot: '',
    fini: false,
    statut: 'AC',
    aChercher: true,
  },
  {
    id: 2,
    image: '',
    titre: 'Magi - The Labyrinth of Magic',
    nombreLu: '24',
    nombrePos: '35',
    nombreTot: '37',
    fini: false,
    statut: 'AL',
    aChercher: true,
  },
  {
    id: 3,
    image: '',
    titre: 'Embalming - Une autre histoire de Frankenstein',
    nombreLu: '0',
    nombrePos: '3',
    nombreTot: '10',
    fini: true,
    statut: 'SF',
    aChercher: true,
  },
  {
    id: 4,
    image: '',
    titre: "Hell's Kitchen",
    nombreLu: '13',
    nombrePos: '13',
    nombreTot: '13',
    fini: true,
    statut: 'F',
    aChercher: false,
  },
];

const keyStorage = 'react.mangas';

function List() {
  const [mangaId, setMangaId] = useState();
  const [mangas, setMangas] = useState(mangaList);

  useEffect(() => {
    const mangasFromStorage = localStorage.getItem(keyStorage);
    if (mangasFromStorage) {
      setMangas(JSON.parse(mangasFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(keyStorage, JSON.stringify(mangas));
  }, [mangas]);

  function handleStatusChange(id) {
    setMangaId(id);
    const mangaToModify = mangas.find((manga) => manga.id === id);
    mangaToModify.aChercher = !mangaToModify.aChercher;
    const newMangas = mangas.map((manga) =>
      manga.id !== id ? manga : mangaToModify
    );
    setMangas(newMangas);
  }

  function handleMangaCreation(titre, nombrePos) {
    const newManga = {
      id: Date.now(),
      titre,
      nombrePos,
      aChercher: true,
    };
    const allMangas = [newManga, ...mangas];
    setMangas(allMangas);
  }

  function handleDelete(id) {
    const allMangas = mangas.filter((manga) => manga.id !== id);
    setMangas(allMangas);
  }

  return (
    <>
      <h1>Liste</h1>
      <div>id :{mangaId}</div>
      <MangaForm handleMangaCreation={handleMangaCreation} />
      <br />
      <ListManga
        lst={mangas}
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default List;
