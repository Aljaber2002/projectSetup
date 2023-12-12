import express, { Application, Request, Response } from 'express';

import cors from 'cors';
const app: Application = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world! assignment-3');
});
app.post('/', (req, res) => {
  res.send('mongodb is working FIne');
});

export default app;
