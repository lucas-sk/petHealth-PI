import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes';
dotenv.config()

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(PORT, () => console.log('server listening on port ' + PORT));
