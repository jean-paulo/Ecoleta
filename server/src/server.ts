import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

//o .use é para adicionar como se fosse um plugin no express, adicionamos a funcionalidade de entender JSON no express
app.use(express.json());

//ter acesso as rotas da nossa aplicação
app.use(routes);

//rota para carregar/acessar as imagens
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


//lida automaticamente com a forma que retornamos os erros de validação para o nosso front end
app.use(errors());

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333');
  });

