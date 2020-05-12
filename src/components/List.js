import React, { useState } from 'react'
import ListManga from './ListManga';

const mangaList = [
    {
        id:1,
        image: "",
        titre: "Die & Retry",
        nombreLu: "5",
        nombrePos: "",
        nombreTot: "",
        fini: false,
        statut: "AC"
    },
    {
        id:2,
        image: "",
        titre: "Magi - The Labyrinth of Magic",
        nombreLu: "24",
        nombrePos: "35",
        nombreTot: "37",
        fini: false,
        statut: "AL"
    },
    {
        id:3,
        image: "",
        titre: "Embalming - Une autre histoire de Frankenstein",
        nombreLu: "0",
        nombrePos: "3",
        nombreTot: "10",
        fini: true,
        statut: "SF"
    },
    {
        id:4,
        image: "",
        titre: "Hell's Kitchen",
        nombreLu: "13",
        nombrePos: "13",
        nombreTot: "13",
        fini: true,
        statut: "F"
    },

];

function List(){

function handleStatusChange(id){
    console.log(id);
    setMangaId(id);
}

    const [mangaId, setMangaId] = useState();
    const [mangas, setMangas] = useState(mangaList);
    return (
        <>
            <h1>Liste</h1>
            <div>id : {mangaId}</div>
            <ListManga lst={mangaList} handleStatusChange={handleStatusChange}/>
        </>
    );
}

export default List;
