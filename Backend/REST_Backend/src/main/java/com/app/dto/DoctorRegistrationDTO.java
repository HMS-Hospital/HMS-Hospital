package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Gender;
import com.app.pojos.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_EMPTY)
public class DoctorRegistrationDTO {
	private int id;
	private String name;
	@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
	private LocalDate dob;
	private Gender gender;
	private String specialization;
	@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
	private LocalDate joinDate;
	private String mobileNo;
	private String emailid;
	private String username;
	private int user_id;
	private Role role;
	private int dept_id;
	
	public int getDept_id() {
		return dept_id;
	}

	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}

	public DoctorRegistrationDTO() {
		// TODO Auto-generated constructor stub
	}

	public DoctorRegistrationDTO(int id, String name, LocalDate dob, Gender gender, String specialization, LocalDate joinDate,
			String mobileNo, String emailid, String username, int user_id,Role role) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.specialization = specialization;
		this.joinDate = joinDate;
		this.mobileNo = mobileNo;
		this.emailid = emailid;
		this.username = username;
		this.user_id = user_id;
		this.role=role;
	}

	public DoctorRegistrationDTO(int id, String name, LocalDate dob, Gender gender, String specialization, LocalDate joinDate,
			String mobileNo, String emailid) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.specialization = specialization;
		this.joinDate = joinDate;
		this.mobileNo = mobileNo;
		this.emailid = emailid;
		
	}
	
	public DoctorRegistrationDTO(int id,String name) {
		this.id=id;
		this.name=name;
	}
	
	public DoctorRegistrationDTO(int id,String name,int user_id) {
		this.id=id;
		this.name=name;
		this.user_id=user_id;
	}
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
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

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public LocalDate getJoinDate() {
		return joinDate;
	}

	public void setJoinDate(LocalDate joinDate) {
		this.joinDate = joinDate;
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

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	
	
}
