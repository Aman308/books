import mongoose from 'mongoose';

const PublisherSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

export default mongoose.model('Publisher', PublisherSchema);