package com.app.controller;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BillDTO;
import com.app.dto.BillDTOTotal;
import com.app.dto.CreateBillDTO;
import com.app.dto.ServiceDTO;
import com.app.pojos.Bill;
import com.app.pojos.Patient;
import com.app.pojos.Service;
import com.app.service.AppointmentService;
import com.app.service.BillService;
import com.app.service.PatientService;

@CrossOrigin
@RestController
@RequestMapping("/bill")
public class BillController {
	
	@Autowired
	private BillService billservice;

	@Autowired
	private PatientService patientService;
	
	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/add/{appt_id}")
	public ResponseEntity<?> addBill(@RequestBody CreateBillDTO bill,@PathVariable int appt_id){
		int id = billservice.saveBill(bill);
		appointmentService.BillGeneratedForAppointment(appt_id);
		return ResponseEntity.ok(id);
	}
	
	@GetMapping("/bills/{id}") 
	public ResponseEntity<?> getBillsForPAtient(@PathVariable int id){
		Patient p = patientService.findPatientById(id);
		return ResponseEntity.ok(billservice.findbillsByPatient(p).stream()
				.map(bill->new BillDTO(bill.getId(),p.getName(),bill.getBillDate(),bill.getService(), bill.getTotal(), bill.getStatus()))
				.collect(Collectors.toList()));
	}
	
		
	@GetMapping("services/{bill_id}")
	public ResponseEntity<?> getServicesOfBill(@PathVariable int bill_id){
		
		Bill bill = billservice.findBillById(bill_id);
		
		return ResponseEntity.ok(bill.getService().stream().map(s->
							new ServiceDTO(s.getId(),s.getDescription(),s.getCharges())).collect(Collectors.toList()));
		
	}
	
	@GetMapping("total/{bill_id}")
	public ResponseEntity<?> getTotalOfBill(@PathVariable int bill_id){
		
		Bill bill = billservice.findBillById(bill_id);
		
		return ResponseEntity.ok(new BillDTOTotal(bill.getTotal(),bill.getStatus()));
		
	}
	
	@PostMapping("paid/{bill_id}")
	public ResponseEntity<?> paid(@PathVariable int bill_id){
		
		Bill bill = billservice.findBillById(bill_id);
		System.out.println(bill.getStatus());
		bill.setStatus("Paid");
		billservice.save(bill);
		
		
		return ResponseEntity.ok("Payment Done");
		
	}
	
}