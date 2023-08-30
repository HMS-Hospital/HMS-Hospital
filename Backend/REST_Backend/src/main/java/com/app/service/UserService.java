package com.app.service;

import com.app.pojos.User;

public interface UserService {
	public User findUserDetails(String username,String password); // To find user details for login.
	public void deleteUser(int id);
}
