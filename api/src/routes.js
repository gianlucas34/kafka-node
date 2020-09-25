import express from 'express';
import { producer } from './producer';

const routes = express.Router();

routes.post('/', async (req, res) => {
    const message = {
        name: 'Gian Lucas',
    }

    await producer.send({
        topic: 'auth',
        messages: [
            { value: JSON.stringify(message) }
        ],
    })
    await producer.disconnect();

    return res.json({ ok: true });
});

export default routes;