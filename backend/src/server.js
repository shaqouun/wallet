import express from 'express';
import { initDB } from './config/db.js';
import dotenv, { parse } from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

import transactionsRoute from './routes/transactionsRoute.js'

dotenv.config();

const app = express();

// Middleware 
app.use(rateLimiter)
app.use(express.json());

const PORT = process.env.PORT || 5001;


// routes
app.use('/api/transactions', transactionsRoute);


console.log('my port is', process.env.PORT);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})


