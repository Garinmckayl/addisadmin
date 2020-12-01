import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import employeeRoutes from './routes/employees.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors());

app.use('/employees', employeeRoutes);

const CONNECTION_URL = 'mongodb+srv://natnael:abc123123@smartquizme-cluster1.y3hwk.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);