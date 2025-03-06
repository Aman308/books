import express from 'express';
import { addBookHandler , getAllBooksHandler } from '../controller/bookController.js';

const router = express.Router();
router.post('/add', addBookHandler);
router.get('/all', getAllBooksHandler);

export default router;