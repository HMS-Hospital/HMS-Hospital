package com.app.dto;

import java.util.ArrayList;

import java.util.List;

public class CreatePrescriptionDTO {
	
//	private int doc_id;
//	private int p_id;
//	private List<CreatePrescriptionDetailsDTO> prescriptiondetails=new ArrayList<>();
//	
//	public int getDoc_id() {
//		return doc_id;
//	}
//	public void setDoc_id(int doc_id) {
//		this.doc_id = doc_id;
//	}
//	public int getP_id() {
//		return p_id;
//	}
//	public void setP_id(int p_id) {
//		this.p_id = p_id;
//	}
//	public List<CreatePrescriptionDetailsDTO> getPrescriptiondetails() {
//		return prescriptiondetails;
//	}
//	public void setPrescriptiondetails(List<CreatePrescriptionDetailsDTO> prescriptiondetails) {
//		this.prescriptiondetails = prescriptiondetails;
//	}
	
	private List<CreatePrescriptionDetailsDTO> prescriptiondetails=new ArrayList<>();
	
	
	public List<CreatePrescriptionDetailsDTO> getPrescriptiondetails() {
		return prescriptiondetails;
	}
	public void setPrescriptiondetails(List<CreatePrescriptionDetailsDTO> prescriptiondetails) {
		this.prescriptiondetails = prescriptiondetails;
	}
	
	
	
}
