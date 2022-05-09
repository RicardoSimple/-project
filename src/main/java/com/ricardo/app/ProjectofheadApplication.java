package com.ricardo.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.ricardo.app","com.ricardo.control"})
public class ProjectofheadApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectofheadApplication.class, args);
	}

}
