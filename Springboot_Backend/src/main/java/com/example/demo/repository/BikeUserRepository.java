package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

import jakarta.transaction.Transactional;

@Repository
public interface BikeUserRepository extends JpaRepository<User, Long> {
	
	@Transactional
	@Query("select count(u) from User u where u.email = ?1")
	public List<Integer> isExists(@Param("email") String email);

	@Transactional
	@Query("select count(u) from User u where u.email = ?1 and u.password = ?2")
	public List<Integer> userValid(@Param("email")String email,@Param("password") String password);

}
