package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Medicine")
public class Medicine {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column(name="Name")
	private String name;
	@Column(name="Company")
	private String company;

	public Medicine() {
		
	}
	
	

	public Medicine(String name, String company) {
		super();
		this.name = name;
		this.company = company;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Medicine [name=" + name + ", company=" + company + "]";
	}

}
