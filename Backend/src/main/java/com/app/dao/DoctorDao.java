package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Department;
import com.app.pojos.Doctor;
import com.app.pojos.User;
import com.app.pojos.UserValidity;

public interface DoctorDao extends JpaRepository<Doctor, Integer>{
	public Optional<Doctor> findDoctorByUser(User u);
	public List<Doctor> findByDept(Department d);
	public List<Doctor> findByUserValidity(UserValidity validity);
}
