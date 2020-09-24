const express = require('express');
const producer = require('./producer');

const routes = express.Router();

routes.post('/', async (req, res) => {
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello Joy Compras!' },
        ],
    })
    await producer.disconnect();

    return res.json({ ok: true });
});

module.exports = routes;