import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';

import { homeController } from '@app/controllers/home.controller';

const app = express();
dotenv.config();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController);

export default app;
