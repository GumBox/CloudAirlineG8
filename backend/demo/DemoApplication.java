package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DemoApplication {

    public static void main( String[] args ) {

        SpringApplication.run(DemoApplication.class, args);

    }

    /**
     * config after have error fetch data controller to React
     * add pom.xml
     * <dependency>
     * <groupId>org.apache.httpcomponents</groupId>
     * <artifactId>httpclient</artifactId>
     * <scope>test</scope>
     * </dependency>
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {

        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings( CorsRegistry registry ) {

                registry.addMapping("/**").allowedOrigins("http://localhost:3000");

            }

        };

    }

}
