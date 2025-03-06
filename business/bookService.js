import { addBook , getAllBooks } from '../repository/bookRepository.js';

export const createBook = async (title, price, year, author, publisher) => {
    return await addBook({ title, price, year, author, publisher });
};

export const fetchAllBooks = async () => {
    return await getAllBooks();
};
