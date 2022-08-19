import  {Router} from 'express';

import SessionController from './controllers/SessionController';
import CasaController from './controllers/CasaController';
import multer from 'multer';

import uploadConfig from './config/upload';

const routes = new Router();
//receber as configurações
const upload = multer(uploadConfig)

routes.post('/sessions',SessionController.store);
routes.post('/casa', upload.single('thumbnail'), CasaController.store)

export default routes;