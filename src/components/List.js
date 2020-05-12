import React from 'react'
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


function handleStatusChange(id){
    console.log(id);
}

function List(){
    return (
        <>
            <h1>Liste</h1>
            <ListManga lst={mangaList} handleStatusChange={handleStatusChange}/>
        </>
    );
}

export default List;
