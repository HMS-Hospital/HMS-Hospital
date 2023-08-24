package com.app.service;

import com.app.dto.PatientDTO;
import com.app.pojos.Patient;
import com.app.pojos.User;

public interface PatientService {
	public String addPatient(Patient p); // To add Patient to patient table and his user details to user table
	public Patient getPatientDetails(User u); // To find the patient details by user details 
	public String editProfile(PatientDTO updatedPatient);
	public Patient findPatientById(int p_id);
	public void deletePatient(int id);
}
