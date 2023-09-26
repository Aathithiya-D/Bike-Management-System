package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.BikeSignInService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/user/signin")
public class BikeSignInController {
	
	@Autowired
	BikeSignInService bikesigninservice;
	
	@Operation(summary = "Validates Email Id and Password")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "User logged in successfully"),
			@ApiResponse(responseCode = "400", description = "Invalid User details")
	})
	@ResponseStatus(HttpStatus.OK)
	@PostMapping(value = "/getUser")
	public boolean userValid(@RequestParam String email, @RequestParam String password)
	{
		System.out.println(email);
		System.out.println(password);
		return bikesigninservice.userValid(email, password);
	}
	


}
