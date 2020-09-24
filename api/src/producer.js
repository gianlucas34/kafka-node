const kafka = require('./kafka');

const producer = kafka.producer();

const run = async () => {
    await producer.connect();
}

run().catch(console.error);

module.exports = producer;