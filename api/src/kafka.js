const { Kafka, logLevel } = require('kafkajs');
/**
 * Conexão com Kafka
 */
const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    logLevel: logLevel.NOTHING
});

module.exports = kafka;