import express, { type Request, type Response } from 'express';
import patientService from '../service/patientService.ts';
import {type Patient, type NewPatient, type UnsensitivePatient} from '../types.ts';
import { newDiaryParser, errorMiddleware } from '../middleware.ts';

const router = express.Router();

router.get('/', (_req, res: Response<UnsensitivePatient[]>) => {
  const data = patientService.getUnsensitivePatients();
  res.send(data);
});

router.post('/', newDiaryParser, (req: Request<unknown,unknown,NewPatient>, res: Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);    
  res.json(addedPatient);
});

router.use(errorMiddleware);

export default router;