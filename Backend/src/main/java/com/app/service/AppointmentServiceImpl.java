package com.app.service;


import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AppointmentDao;
import com.app.dao.DepartmentDao;
import com.app.dao.DoctorDao;
import com.app.dao.PatientDao;
import com.app.dto.CreateAppointmentDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Appstatus;
import com.app.pojos.Department;
import com.app.pojos.Doctor;
import com.app.pojos.Patient;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {
	@Autowired
	private PatientDao patientDao;
	@Autowired
	private DoctorDao doctorDao;
	@Autowired
	private AppointmentDao appointmentDao;
	@Autowired
	private DepartmentDao departmentDao;
	
	@Override
	public String bookAppointment(CreateAppointmentDTO appointment) {
		Appointment a = new Appointment();
		Department d= departmentDao.findById(appointment.getSpecialization()).orElseThrow(()->
			new ResourceNotFoundException("No such dept")
		);
		a.setAppoint(appointment.getAppoint());
		a.setSpecialization(d.getDepartment());
		a.setConsultationFee(50);
		a.setStatus(Appstatus.NOT_CONFIRMED);
		Patient p = patientDao.findById(appointment.getP_id()).orElseThrow(()->
		new ResourceNotFoundException("No such patient")
	);
		Doctor doc = doctorDao.findById(appointment.getD_id()).orElseThrow(()->
		new ResourceNotFoundException("No such doctor")
	);
		if(p!=null && d!=null) {
			p.addAppointment(a);
			doc.addAppointment(a);
			appointmentDao.save(a);
			return "Appointment Booked";
		}
		else {
			return "Booking failed";
		}
	}


	@Override
	public String confirmBooking(int a_id) {
		Appointment a = appointmentDao.findById(a_id).orElse(null);
		if(a!=null) {
			a.setStatus(Appstatus.CONFIRMED);
			return "Appointment Confirmed";
		}
		else {
			return "No such appointment";
		}
		
	}


	@Override
	public List<Appointment> getAppointmentsForDoctor(int d_id) {
		Doctor d = doctorDao.findById(d_id).orElse(null);
		if(d!=null) {
			return appointmentDao.findByDoctor(d);
		}
		else {
			return null;
		}
		
	}


	@Override
	public List<Appointment> getAppointmentsForPatient(int p_id) {
		Patient p = patientDao.findById(p_id).orElse(null);
		if(p!=null) {
			return appointmentDao.findByPatient(p);
		}
		else {
			return null;
		}
	}


	@Override
	public String cancelAppointment(int a_id) {
		Appointment app = appointmentDao.findById(a_id).orElse(null);
		app.setStatus(Appstatus.CANCELLED);
		return "Appointment Cancelled";
	}


	@Override
	public Appointment findAppointmentById(int id) {
		return appointmentDao.findById(id).orElse(null);
	}


	@Override
	public String appointmentCompleted(int id) {
		Appointment appointment = appointmentDao.findById(id).orElseThrow(()->new ResourceNotFoundException("The appointment is not present"));
		appointment.setStatus(Appstatus.ATTENDED);
		return "Appointment Status Done";
	}


	@Override
	public List<Department> getAllDepartments() {
		return departmentDao.findAll();
	}


	@Override
	public String BillGeneratedForAppointment(int id) {
		Appointment appointment = appointmentDao.findById(id).orElseThrow(()->new ResourceNotFoundException("The appointment is not present"));
		appointment.setStatus(Appstatus.ATTENDED_AND_BILL_GENERATED);
		return "Appointment Bill Generated";

	}


	@Override
	public List<Appointment> getAttendedAppointments() {
		return appointmentDao.findByStatus(Appstatus.ATTENDED_AND_PRESCRIP);
	}


	@Override
	public String prescriptionCreated(int appt_id) {
		Appointment appointment = appointmentDao.findById(appt_id).orElseThrow(()->new ResourceNotFoundException("The appointment is not present"));
		appointment.setStatus(Appstatus.ATTENDED_AND_PRESCRIP);
		return "Prescription Created";
	}
 
}
