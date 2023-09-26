package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Bike;
import com.example.demo.repository.BikeRepository;

@Service
public class BikeCRUDService {

	@Autowired
	BikeRepository bikeRepository;

	public Bike create(Bike bike) {
		
		return bikeRepository.save(bike);
	}

	public List<Bike> readAll() {
		
		return bikeRepository.findAll()	;
	}

	public Optional<Bike> getById(Long id) {
		
		return bikeRepository.findById(id);
	}

	public void deleteById(Long id) {
		
		bikeRepository.deleteById(id);
	}

	public Bike update(Bike new_record, Long id) {
		
		Bike updateBike = bikeRepository.findById(id).get();
		
		if(updateBike == null)
		{
			return updateBike;
		}
		else
		{
			updateBike.setBikename(new_record.getBikename());
			updateBike.setCategory(new_record.getCategory());
			updateBike.setPrice(new_record.getPrice());
		}
		
		return bikeRepository.save(updateBike);
	}
	
	
	
	
	
	
	
	
	
}
