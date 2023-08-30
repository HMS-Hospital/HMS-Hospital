package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.BloodType;
import com.app.pojos.Gender;
import com.app.pojos.Role;

public class PatientDTO {
	private int id;
	private String name;
	private LocalDate dob;
	private Gender gender;
	private BloodType type;
	private String address;
	private String state;
	private String city;
	private int pincode;
	private String mobileNo;
	private String emailid;
	private String username;
	private int user_id;
	private Role role;

	public PatientDTO(int id, String name, LocalDate dob, Gender gender, BloodType type, String address, String state,
			String city, int pincode, String mobileNo, String emailid, String username, int user_id,Role role) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.type = type;
		this.address = address;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.mobileNo = mobileNo;
		this.emailid = emailid;
		this.username = username;
		this.user_id = user_id;
		this.role=role;
	}

	public PatientDTO(int id2, String name2,String emailid,String mobileNo,Gender gender,LocalDate dob,String address, int id3) {
		// TODO Auto-generated constructor stub
		this.id=id2;
		this.name=name2;
		this.emailid = emailid;
		this.mobileNo = mobileNo;
		this.gender = gender;
		this.dob = dob;
		this.address = address;
		this.user_id=id3;
	}
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
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

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public BloodType getType() {
		return type;
	}

	public void setType(BloodType type) {
		this.type = type;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
		
}
