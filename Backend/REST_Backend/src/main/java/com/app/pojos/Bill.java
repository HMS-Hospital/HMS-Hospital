package com.app.pojos;
import java.time.LocalDate;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;


@Entity
@Table(name="bill")
public class Bill {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@JoinTable(
	        name = "Bill_Service",
	        joinColumns = {
	            @JoinColumn(name = "b_id")
	        },
	        inverseJoinColumns = {
	            @JoinColumn(name = "s_id")
	        }
	    )
	@ManyToMany
	private Set<Service> service = new HashSet<Service>();
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "p_id")
	private Patient patient;
	
	private LocalDate billDate;
	
	private int total;
	
	private String status;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<Service> getService() {
		return service;
	}

	public void setService(Set<Service> service) {
		this.service = service;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public LocalDate getBillDate() {
		return billDate;
	}

	public void setBillDate(LocalDate billDate) {
		this.billDate = billDate;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}
	
	public void addService(Service s) {
		this.service.add(s);
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
