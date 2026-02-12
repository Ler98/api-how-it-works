//kopplar ihop allt.
//Lyssnar på knapp, kallar search + ui, bestämmer när något ska hända


import {fetchData} from "./api.js"; //importerar funktionen fetchData från api.js
import {searchBooks} from "./search.js";
import {renderBooks} from "./ui.js";


pageSetup()
let bookList = [];

async function pageSetup() {
    bookList = await fetchData('https://santosnr6.github.io/Data/books.json'); //fetchData anropas och hämtar data från nätet
    console.log(bookList);
}

//2.datan som finns i fetchData hamnar i bookList.
//console.log(bookList) listan på alla böcker skrivs ut i konsoll.



document.getElementById("sök-button").addEventListener("click", () => {
    const searchText = document.getElementById("sök-fält").value;
    const resultat = searchBooks(bookList, searchText);
    renderBooks(resultat);
}); 

//4. hämtar texten från input
// anropar searchBooks
//sckickar resultatet till ui.js för att visa