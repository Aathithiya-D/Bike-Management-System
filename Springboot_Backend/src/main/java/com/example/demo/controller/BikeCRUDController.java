package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Bike;
import com.example.demo.service.BikeCRUDService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/bikes/CRUD")
public class BikeCRUDController {
	
	@Autowired
	BikeCRUDService bikeService;
	
	@Operation(summary = "Creates new bike details")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Bike details added successfully"),
			@ApiResponse(responseCode = "400", description = "Invalid bike details")
	})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/post", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Bike> create(final @RequestBody Bike bike) {
		
		Bike createdBike = bikeService.create(bike);
		return ResponseEntity.ok(createdBike);
	}
	
	@Operation(summary = "Retrieves a bike details")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Bike details retrieved successfully"),
			@ApiResponse(responseCode = "400", description = "Invalid bike details")
	})
	@ResponseStatus(HttpStatus.FOUND)
	@GetMapping(value = "/getAll", produces = "application/json")
	public ResponseEntity<List<Bike>> read() {
		
		List<Bike> result = bikeService.readAll();
		return ResponseEntity.ok(result);
	}
	
	@Operation(summary = "Retrieves bike records by given id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Record was retrieved successfully!"),
			@ApiResponse(responseCode = "400", description = "Could not retrieve bike's record")
	})
	@ResponseStatus(HttpStatus.FOUND)
	@GetMapping(value = "/get/{id}", produces = "application/json")
	public ResponseEntity<Optional<Bike>> getById(@PathVariable("id") Long id) {
		
		Optional<Bike> result = bikeService.getById(id);
		return ResponseEntity.ok(result);
	}
	
	@Operation(summary = "Deletes bike records by given id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Record was deleted successfully!"),
			@ApiResponse(responseCode = "400", description = "Could not delete bike's record")
	})
	@ResponseStatus(HttpStatus.OK)
	@DeleteMapping(value = "/delete/{str}", produces = "application/json")
	public void deleteById(@PathVariable("str") String str) {
		
		Long id = Long.parseLong(str);
		bikeService.deleteById(id);
	}
	
	@Operation(summary = "Updates bike records by given id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Record was updated successfully!"),
			@ApiResponse(responseCode = "400", description = "Could not update bike's record")
	})
	@ResponseStatus(HttpStatus.OK)
	@PutMapping(value = "/put/{id}", produces = "application/json")
	public void update(final @RequestBody Bike new_record, @PathVariable("id") Long id) {
		
		bikeService.update(new_record, id);
	}
}
