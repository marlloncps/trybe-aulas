const books = {
    collection : 'The Lord',
    book1 : 'The',
    book2 : 'Two',
    book3 : 'Return',
};

// Copiando objeto de forma errada;

// const newBook = books;
// newBook.collection = 'the best';
// console.log(newBook);

// Copiando corretamente o objeto; (shallow copy)
// const newBook = Object.assign({}, books) // Copiando o objeto (target, source)
// newBook.collection = 'the best';
// console.log(newBook);
// console.log(books);

// Copiando objeto em outro com valores;

// const bookAuthor = {
//     authorName : 'Tolkien',
// };
// Object.assign(books, bookAuthor);
// console.log(books)

// console.log(books.authorName);
