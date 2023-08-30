package com.app.service;

import java.util.List;
import com.app.dto.CreateBillDTO;
import com.app.pojos.Bill;
import com.app.pojos.Patient;


public interface BillService {

	
	public int saveBill(CreateBillDTO bill);
	public List<Bill> findbillsByPatient(Patient p);
	public Bill findBillById(int bill_id);
	public void save(Bill b);

	

}
