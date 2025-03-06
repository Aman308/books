import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' }
});

export default mongoose.model('Book', BookSchema);