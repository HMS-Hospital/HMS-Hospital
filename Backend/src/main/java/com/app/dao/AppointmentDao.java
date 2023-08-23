package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Appointment;
import com.app.pojos.Appstatus;
import com.app.pojos.Doctor;
import com.app.pojos.Patient;

public interface AppointmentDao extends JpaRepository<Appointment, Integer>{
	List<Appointment> findByDoctor(Doctor d);
	List<Appointment> findByPatient(Patient p);
	List<Appointment> findByStatus(Appstatus app);
}
