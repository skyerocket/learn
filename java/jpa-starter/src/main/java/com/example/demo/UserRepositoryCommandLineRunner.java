package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.entity.User;
import com.example.demo.service.UserDAOService;
import com.example.demo.service.UserRepository;

@Component
public class UserRepositoryCommandLineRunner implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(UserRepositoryCommandLineRunner.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		User user = new User("Jill", "Admin");
		
		User created = userRepository.save(user);		
		log.info("New User is created : " + created);
		
		Optional<User> userOne = userRepository.findById(1l);
		log.info("User is retrieved : " + userOne);
		
		List<User> users = userRepository.findAll();
		log.info("All Users" + users);
	}
	
}
