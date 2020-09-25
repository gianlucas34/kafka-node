import { kafka } from './kafka';

export const producer = kafka.producer();

const run = async () => {
    await producer.connect();
}

run().catch(console.error);