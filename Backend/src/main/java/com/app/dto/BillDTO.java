package com.app.dto;

import java.time.LocalDate;
import java.util.Set;

import com.app.pojos.Service;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BillDTO {
	private int id;
	private String patientname;
	private LocalDate generatedDate;
	private Set<Service> services;
	private int total;
	private String status;
	
	public BillDTO(int id, String patientname, LocalDate generatedDate, Set<Service> services, int total , String status) {
		this.id = id;
		this.patientname = patientname;
		this.generatedDate = generatedDate;
		this.services = services;
		this.total = total;
		this.status= status;
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPatientname() {
		return patientname;
	}
	public void setPatientname(String patientname) {
		this.patientname = patientname;
	}
	public LocalDate getGeneratedDate() {
		return generatedDate;
	}
	public void setGeneratedDate(LocalDate generatedDate) {
		this.generatedDate = generatedDate;
	}
	public Set<Service> getServices() {
		return services;
	}
	public void setServices(Set<Service> services) {
		this.services = services;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


}
