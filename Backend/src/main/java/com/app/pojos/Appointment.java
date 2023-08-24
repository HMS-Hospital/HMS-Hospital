package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	
	@ManyToOne
	@JoinColumn(name="doctor_id")
	private Doctor doctor;
	
	@JsonIgnoreProperties(value="appointments")
	@ManyToOne
	@JoinColumn(name="patient_id")
    private Patient patient;
    
    private int consultationFee;
    
    @Column(length = 30)
    private String specialization;
    
    @JsonProperty(access = Access.READ_ONLY)
    private LocalDate appoint;
    
    @Enumerated(EnumType.ORDINAL)
    private Appstatus status;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public int getConsultationFee() {
		return consultationFee;
	}

	public void setConsultationFee(int consultationFee) {
		this.consultationFee = consultationFee;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public LocalDate getAppoint() {
		return appoint;
	}

	public void setAppoint(LocalDate appoint) {
		this.appoint = appoint;
	}

	public Appstatus getStatus() {
		return status;
	}

	public void setStatus(Appstatus status) {
		this.status = status;
	}
    
	
}





