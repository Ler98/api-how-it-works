//Visar saker på sidan.
//tar en lista med böcker -> skapar DOM-element -> visar dem på sidan



export function renderBooks(bookList) {
    const container = document.querySelector(".book-article")
    container.innerHTML = "";

    for (let book of bookList) {
        const bookItem = document.createElement("section");
        bookItem.innerText = `Title: ${book.title} Författare: ${book.author} Antal sidor: ${book.pages}`;
        container.appendChild(bookItem);
    }
}

//5
//hämtar .book-article i html och tömmer den.
//lopar igenom varje bok i booklist
//skapar en scetion som sparas i bookitem
//lägger till text i bookitem (title, författare, antal sidor) (skrivs bara ut om boken fins i bokList)
// lägger in bookItem i .book-article så det syns på sidan