import express from 'express';
import connection from './db/config';
import UserRoutes from "./routes/UserRoutes";
import { json, urlencoded } from 'body-parser';

export const app = express();

console.log("Tentando sincronizar com banco de dados... ");

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/user', UserRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});

connection.sync({ alter: true }).then(() => {
    console.log("Banco de dados conectado com sucesso!");
}).catch((err) => {
    console.log("[ ERR ]", err);
});