package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


public class CreateBillDTO {
	private int p_id;
	private LocalDate billDate;
	private int total;
	private List<Integer> services=new ArrayList<Integer>(); 
	
	
	public int getP_id() {
		return p_id;
	}


	public void setP_id(int p_id) {
		this.p_id = p_id;
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

	public List<Integer> getServices() {
		return services;
	}

	public void setServices(List<Integer> services) {
		this.services = services;
	}
	
	
	

}
