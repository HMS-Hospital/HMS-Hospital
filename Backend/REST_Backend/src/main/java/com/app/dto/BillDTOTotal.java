package com.app.dto;

public class BillDTOTotal {
	
	private int total;
	private String status;
	
	

	public BillDTOTotal(int total, String status) {
		super();
		this.total = total;
		this.status = status;
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
