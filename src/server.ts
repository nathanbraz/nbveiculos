import express from 'express';

import { categoriesRoutes } from './routes/categories.routes'; './routes/categories.routes';

const app = express();

app.use(express.json());



app.listen(3333, () => console.log("Server iniciado"));

