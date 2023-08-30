package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="patient")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(length = 30,nullable = false)
	private String name;
	@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd-MM-yyyy")
	private LocalDate dob;
	@Enumerated(EnumType.ORDINAL)
	private Gender gender;
	@Enumerated(EnumType.ORDINAL)
	private BloodType type;
	@Column(length = 100)
	private String address;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String city;
	private int pincode;
	@Column(length = 15)
	private String mobileNo;
	@Column(length = 30,nullable = false)
	private String emailid;
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "user_id")
	private User user;
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Prescription> prescription=new ArrayList<>();
	
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Bill> bills=new ArrayList<Bill>();
	
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL)
	private List<Appointment> appointments = new ArrayList<Appointment>();
	
	public Patient(String name, LocalDate dob, Gender gender, BloodType type, String address, String state, String city,
			int pincode, String mobileNo, String emailid) {
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
	}

	public Patient() {
		
	}
		
	@Override
	public String toString() {
		return "Patient [name=" + name + ", dob=" + dob + ", gender=" + gender + ", type=" + type + ", address="
				+ address + ", state=" + state + ", city=" + city + ", pincode=" + pincode + ", mobileNo=" + mobileNo
				+ ", emailid=" + emailid + "]";
	}

	
	
	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public List<Bill> getBills() {
		return bills;
	}

	public void setBills(List<Bill> bills) {
		this.bills = bills;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public void addAppointment(Appointment a) {
		this.appointments.add(a);
		a.setPatient(this);
	}
	
	public void addBill(Bill b) {
		this.bills.add(b);
		b.setPatient(this);
	}
	
	public void addPrescription(Prescription p) {
		this.prescription.add(p);
		p.setPatient(this);
	}
}
