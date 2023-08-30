package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DoctorDTO;
import com.app.dto.LoginRequest;
import com.app.dto.PatientDTO;
import com.app.pojos.Admin;
import com.app.pojos.Doctor;
import com.app.pojos.Patient;
import com.app.pojos.Receptionist;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.pojos.UserValidity;
import com.app.service.DoctorService;
import com.app.service.PatientService;
import com.app.service.UserService;

import io.swagger.v3.oas.models.responses.ApiResponse;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private PatientService patientService;
	@Autowired
	private DoctorService doctorService;
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request){
		String username = request.getUsername();
		String password = request.getPassword();
		if(username.equals("ADMIN") && password.equals("ADMIN")) {
			return ResponseEntity.ok(new Admin("ADMIN",Role.ADMIN));
		}
		if(username.equals("RECEPTION") && password.equals("RECEPTION"))
			return ResponseEntity.ok(new Receptionist("Reception",Role.RECEPTIONIST));
		User u = userService.findUserDetails(username, password);
		if(u == null) {
			return ResponseEntity.ok(new com.app.dto.ApiResponse("no such user exist"));
		}
		else {
			if(u.getValidity()==UserValidity.INACTIVE)
			{
				return ResponseEntity.ok(new com.app.dto.ApiResponse("user is inactove"));
			}
			else
			{
				if(u.getUserRole()==Role.PATIENT) {
					Patient p =patientService.getPatientDetails(u);
					return ResponseEntity.ok(new PatientDTO(p.getId(), p.getName(), p.getDob(), p.getGender(), p.getType(), p.getAddress(), p.getState(), p.getCity(), p.getPincode(), p.getMobileNo(), p.getEmailid(), u.getUsername(),u.getId(),u.getUserRole()));
				}
					
				else {
					Doctor d = doctorService.getDoctorDetails(u);
					return ResponseEntity.ok(new DoctorDTO(d.getId(),d.getName(),d.getDob(),d.getGender(),d.getSpecialization(),d.getJoinDate(),d.getMobileNo(),d.getEmailid(),u.getUsername(),u.getId(),u.getUserRole()));	
				}
			}

		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id){
		userService.deleteUser(id);
		return ResponseEntity.ok("User Deleted");
		
	}
	
		
}
