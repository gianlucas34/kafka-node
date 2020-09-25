const express = require('express');
import routes from './routes';
import { consumer } from './consumer';

const app = express();

app.use(routes);

const run = async () => {
    await consumer.subscribe({ topic: 'auth-response' });

    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log('Resposta: ', String(message.value));
        },
    });

    app.listen(3333);
}

run().catch(console.error);