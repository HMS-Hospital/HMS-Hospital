package com.app.service;

import java.util.List;

import com.app.dto.DoctorDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Doctor;
import com.app.pojos.User;

public interface DoctorService {
	public void addDoctor(Doctor d); 
//	public void addDoctor(DoctorRegistrationDTO d); 
	public Doctor getDoctorDetails(User u);
	public void sendMailToPatient(Appointment a);
	public Doctor showDoctorDetails(int id);
	public String editProfile(DoctorDTO d);
	public List<Doctor> getDoctorByDept(int id);
	public List<Doctor> getAllDoctors();
	public Doctor findDoctorById(int id);
}
