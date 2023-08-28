package com.app.service;

import java.util.List;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.PatientDao;
import com.app.dto.PatientDTO;
import com.app.pojos.Patient;
import com.app.pojos.User;
import com.app.pojos.UserValidity;

@Transactional
@Service
public class PatientServiceImpl implements PatientService {
	@Autowired
	public PatientDao patientDao;
	
	
	@Override
	public String addPatient(Patient p) {
			patientDao.save(p);
			return "Patient Added";
		
	}
	
	@Override
	public Patient getPatientDetails(User u) {
		return patientDao.findPatientByUser(u).orElse(null);	
	}

	@Override
	public String editProfile(PatientDTO updatedPatient) {
		Patient p = patientDao.findById(updatedPatient.getId()).orElse(null);
		p.setName(updatedPatient.getName());
		p.setAddress(updatedPatient.getAddress());
		p.setState(updatedPatient.getState());
		p.setCity(updatedPatient.getCity());
		p.setDob(updatedPatient.getDob());
		p.setMobileNo(updatedPatient.getMobileNo());
		p.setPincode(updatedPatient.getPincode());
		p.setEmailid(updatedPatient.getEmailid());
		return "Profile edited";
	}

	@Override
	public Patient findPatientById(int p_id) {
		return patientDao.findById(p_id).orElse(null);
	}

	@Override
	public void deletePatient(int id) {
		patientDao.deleteById(id);
	}

	@Override
	public List<Patient> getAllPatients() {
		
		return patientDao.findByUserValidity(UserValidity.ACTIVE);
	}

}
