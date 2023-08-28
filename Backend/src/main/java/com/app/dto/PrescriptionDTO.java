package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_EMPTY)
public class PrescriptionDTO {
	private int id;
	private String d_name;
	private String p_name;
	private LocalDate date;
	private List<PrescriptionDetailsDTO> pdetails;
	
	public PrescriptionDTO(String d_name, String p_name, LocalDate date,int id) {
		super();
		this.d_name = d_name;
		this.p_name = p_name;
		this.date = date;
		this.id=id;
		
	}
	
	
	

	
	public PrescriptionDTO(int id, String d_name, String p_name, LocalDate date,
			List<PrescriptionDetailsDTO> pdetails) {
		super();
		this.id = id;
		this.d_name = d_name;
		this.p_name = p_name;
		this.date = date;
		this.pdetails = pdetails;
	}


	public PrescriptionDTO(int id, String d_name, String p_name, LocalDate date
			) {
		//super();
		this.id = id;
		this.d_name = d_name;
		this.p_name = p_name;
		this.date = date;
		//this.pdetails = pdetails;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getD_name() {
		return d_name;
	}


	public void setD_name(String d_name) {
		this.d_name = d_name;
	}


	public String getP_name() {
		return p_name;
	}


	public void setP_name(String p_name) {
		this.p_name = p_name;
	}


	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public List<PrescriptionDetailsDTO> getPdetails() {
		return pdetails;
	}

	public void setPdetails(List<PrescriptionDetailsDTO> pdetails) {
		this.pdetails = pdetails;
	}
	
	
	
	
	
}