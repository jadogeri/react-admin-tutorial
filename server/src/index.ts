import express, {Application, NextFunction, Request, Response} from 'express';
import { corsOptions } from './cors.config.js';
import { CorsOptions } from 'cors';
import router from './user.controller.js';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';


const app: Application= express();
const PORT = process.env.PORT || 4000;

app.use(cors(corsOptions))
app.use(cors({ origin: '*' }));
// app.options('*', cors(corsOptions)); // Enable pre-flight for all routes
app.use(express.json());
// Connect to MongoDB (ensure your instance is running)
mongoose.connect('mongodb://localhost:27017/userdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);
const buildPath = path.join(import.meta.dirname, '../..', 'client', 'build');  console.log('Build Path:', buildPath);
  app.use(express.static(buildPath));
  
//app.use(range);

app.get('/home', (req: Request, res: Response) => {
  res.send('Hello World from Express with TypeScript and ESM!');
});

app.listen(PORT, () => {
  console.log(`Server is running on [http://localhost:${PORT}](http://localhost:4000)`);
});
