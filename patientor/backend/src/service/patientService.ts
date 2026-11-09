import patientData from '../../data/patients.ts';
import type { Patient, UnsensitivePatient, NewPatient } from '../types.ts';
import { v1 as uuid } from 'uuid';

let patients: Patient[] = patientData;

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

const addPatient = (newPatient : NewPatient) => {
    const id = uuid();
    const addedPatient = {
        id,
        ...newPatient
    };
    patients = [...patients, addedPatient];
    return addedPatient;
};

export default {
  getPatients,
  getUnsensitivePatients,
  addPatient    
};