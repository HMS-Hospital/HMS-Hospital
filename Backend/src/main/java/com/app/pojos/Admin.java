package com.app.pojos;

public class Admin {
	private String name;
	private Role role;
	
	public Admin() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Admin(String name, Role role) {
		this.name = name;
		this.role = role;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	
}
