import express from "express";
import { createTransaction, deleteTransaction, getSummaryByUserId, getTransactionById } from "../controllers/transactionController.js";

const router = express.Router();

// Routes
router.get('/:userId', getTransactionById)
router.post('/', createTransaction)
router.delete('/:id',deleteTransaction);
router.get('/summary/:userId', getSummaryByUserId)


export default router