import express from 'express';
import diagnoseService from '../service/diagnoseService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseService.getEntries());
});

router.post('/', (_req, res) => {
  res.send(diagnoseService.addDiagnose());
});

export default router;