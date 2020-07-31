import 'dotenv/config';
import express from 'express';

import UserController from './app/controller/UserController';

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server running on ' + process.env.PORT)
});

app.post('/users', UserController.store);