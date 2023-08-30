package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Patient;
import com.app.pojos.User;
import com.app.pojos.UserValidity;

public interface PatientDao extends JpaRepository<Patient, Integer>{
	public Optional<Patient> findPatientByUser(User u);
	public List<Patient> findByUserValidity(UserValidity validity);

}
