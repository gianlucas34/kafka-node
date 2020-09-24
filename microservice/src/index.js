import { consumer } from './consumer';

const run = async () => {
    await consumer.subscribe({ topic: 'test-topic' });

    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log(`${message.value}`);
        },
    })
}

run().catch(console.error);