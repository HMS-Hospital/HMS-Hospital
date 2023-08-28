package com.app.service;

import java.util.List;

import com.app.dto.CreatePrescriptionDTO;
import com.app.dto.CreatePrescriptionDetailsDTO;
import com.app.dto.PrescriptionDTO;
import com.app.pojos.Doctor;
import com.app.pojos.Medicine;
import com.app.pojos.Patient;
import com.app.pojos.Prescription;


public interface PrescriptionService {

	public PrescriptionDTO savePrescription(CreatePrescriptionDTO p,int apptid);
	public String savePrescriptionDetails(CreatePrescriptionDetailsDTO p,int id);

	public List<Prescription> findPrescriptionByPatient(Patient pat);
	public List<Medicine> getMedicines();
	public List<Prescription> findPrescriptionByDoctor(Doctor doc);
	public Prescription getPrescriptionById(int id);
}
