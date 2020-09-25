import { Kafka, logLevel } from 'kafkajs';
/**
 * Conexão com Kafka
 */
export const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    logLevel: logLevel.NOTHING
});