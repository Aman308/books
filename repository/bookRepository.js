import Book from '../models/Book.js';
import Author from '../models/Author.js';
import Publisher from '../models/Publisher.js';

// Find or create an Author
const findOrCreateAuthor = async (name) => {
    let author = await Author.findOne({ name });
    if (!author) {
        author = new Author({ name });
        await author.save();
    }
    return author;
};

// Find or create a Publisher
const findOrCreatePublisher = async (name) => {
    let publisher = await Publisher.findOne({ name });
    if (!publisher) {
        publisher = new Publisher({ name });
        await publisher.save();
    }
    return publisher;
};

// Function to add a book
export const addBook = async ({ title, price, year, author, publisher }) => {
    const authorData = await findOrCreateAuthor(author);
    const publisherData = await findOrCreatePublisher(publisher);

    const book = new Book({
        title,
        price,
        year,
        author: authorData._id,
        publisher: publisherData._id,
    });

    return await book.save();
};

// Function to fetch all books with populated author and publisher
export const getAllBooks = async () => {
    return await Book.find()
        // .populate('author') // Populate author and select only the name field
        // .populate('publisher') // Populate publisher and select only the name field
        .select('title price year author publisher');
};
