package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringRestApplication {
	private static final Logger log = LoggerFactory.getLogger(SpringRestApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringRestApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(EmployeeRepository repository) {
		return (args) -> {
			// save a couple of employee
			repository.save(new Employee("James", "Ni", "IT Director"));
			repository.save(new Employee("Dustin", "Yan", "Sales Director"));
			repository.save(new Employee("Kiki", "Zhang", "Marketing Manager"));

			// fetch all employee
			log.info("Employee found with findAll():");
			log.info("-------------------------------");
			for (Employee employee : repository.findAll()) {
				log.info(employee.toString());
			}
			log.info("");

			// fetch an individual employee by ID
			Employee employee = repository.findOne(1L);
			log.info("Employee found with findOne(1L):");
			log.info("--------------------------------");
			log.info(employee.toString());
			log.info("");

		};
	}
}
