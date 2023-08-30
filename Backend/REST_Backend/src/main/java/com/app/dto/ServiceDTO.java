package com.app.dto;

public class ServiceDTO {
	
	private int id;
    private String description;
	private int charges;

	
	
	public ServiceDTO(int id, String description, int charges ) {
		super();
		this.id = id;
		this.description = description;
		this.charges = charges;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCharges() {
		return charges;
	}
	public void setCharges(int charges) {
		this.charges = charges;
	}
	
	

}
