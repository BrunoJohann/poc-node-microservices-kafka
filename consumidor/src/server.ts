import kafka from '../config/kafka-config';

const topic = 'test-topic'
const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic, fromBeginning: true })
    await consumer.run({
      // eachBatch: async ({ batch }) => {
      //   console.log(batch)
      // },
      eachMessage: async ({ topic, partition, message }) => {
        // const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
        // console.log(`- ${prefix} ${message.key}#${message.value}`)
        console.log('topic:', topic);
        console.log('partition:', partition);
        console.log('message:', message.value.toString());
      },
    });
  }
  
  run().catch(e => console.error('Aconteceu um erro!', e))


