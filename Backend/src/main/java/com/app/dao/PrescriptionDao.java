package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Doctor;
import com.app.pojos.Patient;
import com.app.pojos.Prescription;

public interface PrescriptionDao extends JpaRepository<Prescription, Integer> {
	public List<Prescription> findByPatient(Patient patient);
	public List<Prescription> findByDoc(Doctor doc);
}
