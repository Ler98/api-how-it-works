//3.bara sök

export function searchBooks(bookList, searchText) {

    return bookList.filter(book =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );

    
}

