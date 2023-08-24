package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.app.pojos.Appstatus;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class AppointmentDTO {
	private int id;
	private String patientname;
	private String doctorname;
	private LocalDate appoint;
	private Appstatus status;
	private int pid;
	
	public AppointmentDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public AppointmentDTO(int id, String patientname, LocalDate appoint, Appstatus status,int pid) {
		this.id = id;
		this.patientname = patientname;
		this.appoint = appoint;
		this.status = status;
		this.pid = pid;
	}
	
	public AppointmentDTO(int id, String patientname,String doctorname, Appstatus status,int pid) {
		this.id = id;
		this.patientname = patientname;
		this.doctorname = doctorname;
		this.status = status;
		this.pid = pid;
	}
	
	public AppointmentDTO(int id, LocalDate appoint, String doctorname,Appstatus status) {
		this.id = id;
		this.doctorname = doctorname;
		this.appoint = appoint;
		this.status = status;
	}
	
	
	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getDoctorname() {
		return doctorname;
	}

	public void setDoctorname(String doctorname) {
		this.doctorname = doctorname;
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
