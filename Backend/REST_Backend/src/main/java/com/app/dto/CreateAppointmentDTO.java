package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

public class CreateAppointmentDTO {
	private int specialization;
	private int d_id;
	private int p_id;
	@JsonFormat(pattern = "yyyy-MM-dd",shape = Shape.STRING)
	private LocalDate appoint;
	
	public int getSpecialization() {
		return specialization;
	}
	public void setSpecialization(int specialization) {
		this.specialization = specialization;
	}
	public int getD_id() {
		return d_id;
	}
	public void setD_id(int d_id) {
		this.d_id = d_id;
	}
	public int getP_id() {
		return p_id;
	}
	public void setP_id(int p_id) {
		this.p_id = p_id;
	}
	public LocalDate getAppoint() {
		return appoint;
	}
	public void setAppoint(LocalDate appoint) {
		this.appoint = appoint;
	}
	
	
	
}
