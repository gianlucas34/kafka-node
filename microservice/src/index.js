import { consumer } from './consumer';
import { producer } from './producer';

const run = async () => {
    await consumer.subscribe({ topic: 'auth' });

    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log(`${message.value}`);

            const payload = JSON.parse(message.value);

            producer.send({
                topic: 'auth-response',
                messages: [
                    { value: `Autenticação realizada como: ${payload.name}!` }
                ]
            })
        },
    })
}

run().catch(console.error);