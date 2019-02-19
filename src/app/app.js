import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import routes from '@app/routes';
import { homeController } from '@app/controllers/home.controller';

const app = express();
dotenv.config();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', routes);

app.get('/', homeController);

export default app;
