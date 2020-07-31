import 'dotenv/config';
import express from 'express';

import UserController from './app/controller/UserController';
import Queue from './app/lib/Queue';

const app = express();

console.log(Queue);

app.use(express.json());

app.post('/users', UserController.store);

app.listen(process.env.PORT, () => {
    console.log('Server running on ' + process.env.PORT)
});
