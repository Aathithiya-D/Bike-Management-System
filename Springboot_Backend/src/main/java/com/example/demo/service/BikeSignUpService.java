package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.BikeUserRepository;

@Service
public class BikeSignUpService {
	
	@Autowired
	BikeUserRepository bikeuserrepository;
	
	public boolean createUser(User new_user)
	{
		List<Integer> countList = bikeuserrepository.isExists(new_user.getEmail());
		
		
		if(countList.get(0) == 0)
		{
			bikeuserrepository.save(new_user);
			return true;			
		}
		
		else
		{
			return false;
		}
	}

}
