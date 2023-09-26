package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.BikeSignUpService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/user/signup")
public class BikeSignUpController {
	
	@Autowired
	BikeSignUpService bikesignupservice;
	
	@Operation(summary = "Creates new User")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "User details added successfully"),
			@ApiResponse(responseCode = "400", description = "Invalid User details")
	})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/postNewUser", produces = "application/json")
	public boolean createNewUser(@RequestBody User new_user)
	{
		System.out.println(new_user.getEmail());
		return bikesignupservice.createUser(new_user);
	}

}
