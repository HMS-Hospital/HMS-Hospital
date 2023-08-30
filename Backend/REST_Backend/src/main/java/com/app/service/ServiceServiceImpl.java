package com.app.service;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.dao.ServiceDao;

@Service
@Transactional
@CrossOrigin
public class ServiceServiceImpl implements ServiceService {
	@Autowired
	private ServiceDao servicedao;

	@Override
	public List<com.app.pojos.Service> getServices() {
		System.out.println("abcd");
		List<com.app.pojos.Service> li= servicedao.findAll();
		System.out.println("aaaaa"+li);
	return li;
	}

//	@Override
//	public 	List<Servicee> getServices(){
//		System.out.println("abcd");
//		List<Servicee> li= servicedao.findAll();
//		System.out.println("aaaaa"+li);
//		return li;
//	}

}
