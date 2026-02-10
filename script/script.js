
import {fetchData} from "./api.js"; //importerar

pageSetup()

async function pageSetup() {
    const bookList = await fetchData('https://santosnr6.github.io/Data/books.json');
    console.log(bookList);
}

