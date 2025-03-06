import Book from '../models/Book.js';

export const addBook = async (bookData) => {
    const book = new Book(bookData);
    return await book.save();
};

export const getAllBooks = async () => {
    return await Book.find().select('title price year author publisher');
};