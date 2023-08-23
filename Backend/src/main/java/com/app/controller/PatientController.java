package com.app.controller;


import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDTO;
import com.app.dto.PatientDTO;
import com.app.pojos.Patient;
import com.app.pojos.Role;
import com.app.pojos.UserValidity;
import com.app.service.AppointmentService;
import com.app.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/patient")
public class PatientController {
	@Autowired
	private PatientService patientService;
	@Autowired
	private AppointmentService appointmentService;
	
//	@PostMapping("/signup")
//	public ResponseEntity<?> addPatient(@RequestBody Patient newPatient){
//		newPatient.getUser().setUserRole(Role.PATIENT);
//		newPatient.getUser().setValidity(UserValidity.ACTIVE);
//		return ResponseEntity.ok(patientService.addPatient(newPatient));
//	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> addPatient(@RequestBody PatientDTO newPatient){
//		newPatient.getUser().setUserRole(Role.PATIENT);
//		newPatient.getUser().setValidity(UserValidity.ACTIVE);
		return ResponseEntity.ok(patientService.addPatient(newPatient));
	}
	
//	@PutMapping("/edit")
//	public ResponseEntity<?> editProfile(@RequestBody PatientDTO updatedPatient){
//		return ResponseEntity.ok(patientService.editProfile(updatedPatient));
//	}
	
//	@PutMapping()
//	public ResponseEntity<?> editProfile(@RequestBody PatientDTO updatedPatient,@PathVariable Long id){
//		patientService.getPatientDetails(updatedPatient.getUser_id(),updatedPatient.getId());
//		return ResponseEntity.ok(patientService.editProfile(updatedPatient,id),HttpStatus.OK);
//	}
	
	@GetMapping("/appointments/{id}")
	public ResponseEntity<?> getAppointmentsForPatient(@PathVariable int id){ 
		return ResponseEntity.ok(appointmentService.getAppointmentsForPatient(id).stream()
				.map(app->new AppointmentDTO(app.getId(), app.getAppoint(),app.getDoctor().getName(),app.getStatus()))
				.collect(Collectors.toList()));		
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> deletePatient(@RequestParam int id){
		return ResponseEntity.ok("Patient Deleted");
		
	}
	
//	@DeleteMapping("/{id}")
//	public ResponseEntity<?> deletePatient(@RequestParam int id){
//		return ResponseEntity.ok("Patient Deleted");
//		
//	}
	
}
