package com.app;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEnd {

	public static void main(String[] args) {
		SpringApplication.run(BackEnd.class, args);
	}
	@Bean // equivalent to <bean id ..../> in xml file // ModelMapper -> a library for mapping one object to another,  typically used for dto
	public ModelMapper mapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		return modelMapper;
	}
//latest
}
//@Bean
//- is used to define spring bean in your application context / project.
//- it is method level annotation
//- spring beans are objects which are created annd manged by spring container.
