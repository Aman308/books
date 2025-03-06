import express from 'express';
import connectDB from './config/mongodb.js';
import bookRoutes from './routers/bookRouters.js';

const app = express();
connectDB();
app.use(express.json());
app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));