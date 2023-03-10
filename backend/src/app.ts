import express from 'express';
import RUser from './routes/RUser';
import { json, urlencoded } from 'body-parser';
import connection from './db/config';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/user', RUser);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});

console.log("Tentando conectar banco de dados... ");

connection.sync().then(() => {
    console.log("Banco de dados conectado com sucesso!");
}).catch((err) => {
    console.log("[ ERR ]", err);
});

app.listen(3000);