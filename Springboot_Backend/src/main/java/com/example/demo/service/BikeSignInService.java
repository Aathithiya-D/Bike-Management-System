package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.BikeUserRepository;

@Service
public class BikeSignInService {
	
	@Autowired
	BikeUserRepository bikeuserrepository;
	
	public boolean userValid(String email, String password)
	{
		List<Integer> countExist = bikeuserrepository.userValid(email, password);
		
		if(countExist.get(0) == 1)
		{
			return true;
		}
		
		else
		{
			return false;
		}
	}

}
