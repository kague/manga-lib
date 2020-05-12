import React, { useState } from 'react';

export default function MangaForm({ handleMangaCreation }) {
  const [titre, setTitre] = useState('');
  const [nombrePos, setNombrePos] = useState('');

  function handleTitreChange(e) {
    setTitre(e.target.value);
  }

  function handleNbPossede(e) {
    setNombrePos(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleMangaCreation(titre, nombrePos);
    setTitre('');
    setNombrePos('');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Titre"
        name="titre"
        value={titre}
        onChange={(e) => handleTitreChange(e)}
      />
      <input
        type="text"
        placeholder="Nombre"
        name="nbPos"
        value={nombrePos}
        onChange={(e) => handleNbPossede(e)}
      />
      <button type="submit" onClick={handleFormSubmit}>
        ajouter
      </button>
    </form>
  );
}
