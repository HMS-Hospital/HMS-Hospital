package com.app.dto;

public class PrescriptionDetailsDTO {
	
	private int id;
	private String M_name;
	private String dosage;
	private String duration;
	private int quantity;
	
	public PrescriptionDetailsDTO(int id, String m_name, String dosage, String duration, int quantity) {
		super();
		this.id = id;
		M_name = m_name;
		this.dosage = dosage;
		this.duration = duration;
		this.quantity = quantity;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getM_name() {
		return M_name;
	}

	public void setM_name(String m_name) {
		M_name = m_name;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
