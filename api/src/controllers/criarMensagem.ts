import { Request, Response } from 'express';
import { producer } from '../../config/kafka-config';

export async function criarMensagem(req: Request, res: Response) {
    const { mensagem } = req.body;

    try {
        await producer.connect();
        await producer.send({
            topic: 'test-topic',
            messages: [
                // { value: 'Hello KafkaJS user!!' },
                // { value: JSON.stringify(body) },
                { value: mensagem }
            ],
        });
    
        await producer.disconnect();
    } catch (err) {
        console.log('Erro:', err);
        return res.json({ Ok: false, mensagem, erro: err });
        // throw err;
    }

    return res.json({ Ok: true, mensagem });
}
