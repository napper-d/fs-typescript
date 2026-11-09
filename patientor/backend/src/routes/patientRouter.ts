import express from 'express';
import patientService from '../service/patientService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getUnsensitivePatients());
});

router.post('/', (_req, res) => {
  res.send(patientService.addPatient());    
});

export default router;