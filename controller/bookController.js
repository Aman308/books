import Author from '../models/Author.js';
import Publisher from '../models/Publisher.js';
import { createBook , fetchAllBooks} from '../business/bookService.js';

export const addBookHandler = async (req, res) => {
    try {
        const { title, price, year, author, publisher } = req.body;

        // Find or create the Author
        let authorData = await Author.findOne({ name: author });
        if (!authorData) {
            authorData = new Author({ name: author });
            await authorData.save();
        }

        // Find or create the Publisher
        let publisherData = await Publisher.findOne({ name: publisher });
        if (!publisherData) {
            publisherData = new Publisher({ name: publisher });
            await publisherData.save();
        }

        // Create book with ObjectIds
        const book = await createBook(title, price, year, authorData._id, publisherData._id);

        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllBooksHandler = async (req, res) => {
    try {
        const books = await fetchAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
