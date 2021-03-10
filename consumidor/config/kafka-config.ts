import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    logLevel: logLevel.INFO,
    clientId: 'api',
    brokers: ['localhost:9092']
});

export default kafka;