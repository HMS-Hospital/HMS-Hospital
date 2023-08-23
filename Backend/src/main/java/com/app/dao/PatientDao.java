package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Patient;
import com.app.pojos.User;

public interface PatientDao extends JpaRepository<Patient, Integer>{
	public Optional<Patient> findPatientByUser(User u);
}
