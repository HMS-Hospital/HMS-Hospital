package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.service.ServiceService;

@RestController
@RequestMapping("/hospitalservice")
@CrossOrigin
public class ServiceController {
	
	@Autowired
	private ServiceService serviceservice;
	
	@GetMapping("/showAll")
	public ResponseEntity<?> getAllServices(){	
		System.out.println("hello");
		System.out.println("abcd"+serviceservice.getServices());
		return ResponseEntity.ok(serviceservice.getServices());
	}
}
