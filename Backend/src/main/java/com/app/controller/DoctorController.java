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
import com.app.dto.DoctorDTO;
import com.app.pojos.Doctor;
import com.app.pojos.Role;
import com.app.pojos.UserValidity;
import com.app.service.AppointmentService;
import com.app.service.DoctorService;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/doctor")
public class DoctorController {
	@Autowired
	private DoctorService doctorService;
	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addDoctor(@RequestBody Doctor details){
		details.getUser().setUserRole(Role.DOCTOR);
		details.getUser().setValidity(UserValidity.ACTIVE);
		doctorService.addDoctor(details);
		return ResponseEntity.ok("Doctor Added");
	}
	
//	@PostMapping("/add")
//	public ResponseEntity<?> addDoctor(@RequestBody DoctorRegistrationDTO details){
//		doctorService.addDoctor(details);
//		return ResponseEntity.ok("Doctor Added");
//	}
	
	@GetMapping("/appointments/{id}")
	public ResponseEntity<?> getAppointmentsForDoctor(@PathVariable int id){ 
		return ResponseEntity.ok(appointmentService.getAppointmentsForDoctor(id).stream()
				.map(app->new AppointmentDTO(app.getId(),app.getPatient().getName(), app.getAppoint(), app.getStatus(),app.getPatient().getId()))
				.collect(Collectors.toList()));
	}
	
	@PutMapping("/edit")
	public ResponseEntity<?> editProfile(@RequestBody DoctorDTO updatedDoctor){		
		return ResponseEntity.ok(doctorService.editProfile(updatedDoctor));
	}
	
	@GetMapping("/show/{id}")
	public ResponseEntity<?> getDoctorDetails(@PathVariable int id){
		Doctor doc= doctorService.showDoctorDetails(id);
		return ResponseEntity.ok(new DoctorDTO(doc.getId(),doc.getName(),doc.getDob(),doc.getGender(),doc.getSpecialization(),doc.getJoinDate(),doc.getMobileNo(),doc.getEmailid()));
	}
	
	@GetMapping("/doctors/{id}")
	public ResponseEntity<?> getDoctorDetailsByDepartment(@PathVariable int id){
		return ResponseEntity.ok(doctorService.getDoctorByDept(id).stream().map(doctor->new DoctorDTO(doctor.getId(),doctor.getName())).collect(Collectors.toList()));
	}
	
	@GetMapping("/showall")
	public ResponseEntity<?> getAllDoctors(){
		return ResponseEntity.ok(doctorService.getAllDoctors().stream().map(doctor->new DoctorDTO(doctor.getId(),doctor.getName(),doctor.getUser().getId())).collect(Collectors.toList()));
	}
}
