package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.pojos.Bill;
import com.app.pojos.Patient;


public interface BillDao extends JpaRepository<Bill, Integer>{
	
	public List<Bill> findByPatient(Patient p);
	
}
