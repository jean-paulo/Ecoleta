import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi} from 'celebrate';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();

//rota que lista os items da aplicação
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

//upload.single() porque queremos apenas um arquivo, se fossem mais de um upload.array()
routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
);
//abortEarly serve para mostrar todos os campos que não foram validados, caso contrario ele só iria mostrar o primeiro


//precisamos exportar as rotas para ter acesso dentro do server
export default routes;