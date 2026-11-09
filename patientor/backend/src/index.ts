import express from 'express';
import diagnoseRouter from './routes/diagnoseRouter.ts';
import patientRouter from './routes/patientRouter.ts';

const app = express();
app.use(express.json());

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);  
app.use('/api/patients', patientRouter);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});