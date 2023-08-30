package com.app.service;

import java.util.List;

import com.app.dto.CreateAppointmentDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Department;

public interface AppointmentService {
	public String bookAppointment(CreateAppointmentDTO appointment);
	public String confirmBooking(int a_id);
	public List<Appointment> getAppointmentsForDoctor(int d_id);
	public List<Appointment> getAppointmentsForPatient(int p_id);
	public String cancelAppointment(int a_id);
	public Appointment findAppointmentById(int id);
	public String appointmentCompleted(int id);
	public List<Department> getAllDepartments();
	public String BillGeneratedForAppointment(int id);
	public List<Appointment> getAttendedAppointments();
	public String prescriptionCreated(int appt_id);
}
