package com.app.service;

import java.util.List;


import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.DepartmentDao;
import com.app.dao.DoctorDao;
import com.app.dao.UserDao;
import com.app.dto.DoctorDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Department;
import com.app.pojos.Doctor;
import com.app.pojos.User;
import com.app.pojos.UserValidity;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	@Autowired
	private DoctorDao doctorDao;
	@Autowired
	private DepartmentDao deptDao;
	
	@Autowired
	private UserDao userDao;
	
	
	@Autowired 
	private JavaMailSender javaMailSender;
	
	@Value("${spring.mail.username}")
	private String email;
	
	@Override
	public void addDoctor(Doctor d) {
		Department dept = deptDao.findById(d.getDept().getId()).orElseThrow(()->new ResourceNotFoundException("no such department"));
		d.setDept(dept);
		doctorDao.save(d);
	}
	
//	@Override
//	public void addDoctor(DoctorRegistrationDTO d) {
//		Department dept = deptDao.findById(d.getDept_id()).orElseThrow(()->new ResourceNotFoundException("no such department"));
//		Doctor doctor = mapper.map(d,Doctor.class);
//		doctor.setDept(dept);
//		
////		details.getUser().setUserRole(Role.DOCTOR);
////		details.getUser().setValidity(UserValidity.ACTIVE);
//		
//		doctorDao.save(doctor);
//	}

	@Override
	public Doctor getDoctorDetails(User u) {
		return doctorDao.findDoctorByUser(u).orElse(null);
	}

	@Override
	public void sendMailToPatient(Appointment a) {
		
		SimpleMailMessage message = new SimpleMailMessage(); 
		String patientmail = a.getPatient().getEmailid();
		
			message.setFrom(email);
	        message.setTo(patientmail); 
	        message.setSubject("Appointment"); 
	        message.setText("Appointment is confirmed");
	        javaMailSender.send(message);
		
	}
	
	@Override
	public String editProfile(DoctorDTO d) {
		Doctor doc=doctorDao.findById(d.getId()).orElse(null);
		doc.setName(d.getName());
		doc.setDob(d.getDob());
		doc.setGender(d.getGender());
		doc.setSpecialization(d.getSpecialization());
		doc.setJoinDate(d.getJoinDate());
		doc.setMobileNo(d.getMobileNo());
		doc.setEmailid(d.getEmailid());
		return "profile updated" ;
	}

	@Override
	public Doctor showDoctorDetails(int id) {
		return doctorDao.findById(id).orElse(null);
	}

	@Override
	public List<Doctor> getDoctorByDept(int id) {
		Department d= deptDao.findById(id).orElse(null);
		
		return doctorDao.findByDept(d);
	}

	@Override
	public List<Doctor> getAllDoctors() {
		return doctorDao.findByUserValidity(UserValidity.ACTIVE);
	}
	
	@Override
	public Doctor findDoctorById(int id) {
		
		return doctorDao.findById(id).orElse(null);

	}
//	@Override
//	public void deleteDoctor(int id) {
//		//Doctor d = doctorDao.findById(id).orElse(null);
//		
//		//int user_id = d.getUser().getId();
//		//System.out.println(user_id);
//	//	int dep_id =d.getDept().getId();
//		doctorDao.deleteById(id);
//		//userDao.deleteById(user_id);
//		System.out.println("Doctor Deleted");
//	}
}
	
