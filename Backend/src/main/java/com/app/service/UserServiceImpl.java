package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.pojos.User;
import com.app.pojos.UserValidity;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	
	@Override
	public User findUserDetails(String username,String password) {
		return userDao.findUserByUsernameAndPassword(username, password).orElse(null);
	}

	@Override
	public void deleteUser(int id) {
		User u=userDao.findById(id).orElse(null);
		if(u.getValidity()==UserValidity.ACTIVE) {
			u.setValidity(UserValidity.INACTIVE);
		}
	}
}
