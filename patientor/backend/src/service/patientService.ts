import patientData from '../../data/patients.ts';
import type { Patient, UnsensitivePatient } from '../types.ts';

const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
  return patients;
};

const getUnsensitivePatients = (): UnsensitivePatient[] => {
  return patients.map(patient => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
  }));
};

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  getUnsensitivePatients,
  addPatient    
};