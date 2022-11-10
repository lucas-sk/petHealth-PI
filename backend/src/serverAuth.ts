import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';
import { routerAuth } from './routes/authRoutes';
dotenv.config()

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors())
app.use(routerAuth);

app.listen(PORT, () => console.log('server listening on port ' + PORT));
