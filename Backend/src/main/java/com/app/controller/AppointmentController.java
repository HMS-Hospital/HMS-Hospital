package com.app.controller;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDTO;
import com.app.dto.CreateAppointmentDTO;
import com.app.service.AppointmentService;
import com.app.service.DoctorService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
	@Autowired
	private DoctorService doctorService;
	@Autowired
	private AppointmentService appointmentService;

	@PutMapping("/cancel/{id}")
	public ResponseEntity<?> cancelAppointment(@PathVariable int id){
		return ResponseEntity.ok(appointmentService.cancelAppointment(id));
	}
	
	
	@PostMapping("/book")
	public ResponseEntity<?> bookAppointment(@RequestBody CreateAppointmentDTO details){	
		return ResponseEntity.ok(appointmentService.bookAppointment(details));
	}
	
	@PutMapping("/confirm/{a_id}")
	public ResponseEntity<?> confirmBooking(@PathVariable int a_id){
		String message = appointmentService.confirmBooking(a_id);
//		doctorService.sendMailToPatient(appointment);
		return ResponseEntity.ok(message);
	}
	
	@PutMapping("/attended/{a_id}")
	public ResponseEntity<?> appointmentAttended(@PathVariable int a_id){
		return ResponseEntity.ok(appointmentService.appointmentCompleted(a_id));
	}
	
	@GetMapping("/getdept")
	public ResponseEntity<?> getDepartmentsForAppointment(){
		return ResponseEntity.ok(appointmentService.getAllDepartments());
	}
	
	@GetMapping("/getAttended")
	public ResponseEntity<?> getAttendedAppointments(){
		return ResponseEntity.ok(appointmentService.getAttendedAppointments().stream().map(appointment->new AppointmentDTO(appointment.getId(), appointment.getPatient().getName(),appointment.getDoctor().getName(),appointment.getStatus(),appointment.getPatient().getId())).collect(Collectors.toList()));
	}
}
