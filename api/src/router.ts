import { Router } from 'express';
import { criarMensagem } from './controllers/criarMensagem';

const router = Router();

router.post('/criarMensagem', criarMensagem);

export { router };