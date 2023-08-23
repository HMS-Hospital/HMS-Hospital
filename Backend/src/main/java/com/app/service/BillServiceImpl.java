package com.app.service;


import java.time.LocalDate;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.dao.BillDao;
import com.app.dao.PatientDao;
import com.app.dao.ServiceDao;
import com.app.dto.CreateBillDTO;
import com.app.pojos.Bill;
import com.app.pojos.Patient;
import com.app.pojos.Service;

@org.springframework.stereotype.Service
@Transactional
@CrossOrigin
public class BillServiceImpl implements BillService{
	@Autowired
	private PatientDao patientDao;
	@Autowired
	private BillDao billdao;
	@Autowired
	private ServiceDao servicedao;

	@Override
	public int saveBill(CreateBillDTO bill) {
		Patient p = patientDao.findById(bill.getP_id()).orElse(null);
		Bill b = new Bill();
		p.addBill(b);
		b.setBillDate(LocalDate.now());
		b.setStatus("unpaid");
		int total=0;
		for(int i : bill.getServices()) {
			Service s=servicedao.findById(i).orElse(null);
			total = total + s.getCharges();
			b.addService(s);
		}
		b.setTotal(total);
		billdao.save(b);
		return b.getId();
	}
	
	@Override
	public List<Bill> findbillsByPatient(Patient p) {
		return billdao.findByPatient(p);
	}
	
	public Bill findBillById(int bill_id) {
		
		
		return billdao.findById(bill_id).orElse(null);
		
	}

	@Override
	public void save(Bill b) {
	billdao.save(b);
		
	}



}
