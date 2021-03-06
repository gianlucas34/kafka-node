import { kafka } from './kafka';

export const consumer = kafka.consumer({ groupId: 'auth-group' });

const run = async () => {
    await consumer.connect();
}

run().catch(console.error);