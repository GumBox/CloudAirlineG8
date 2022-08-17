package com.example.demo;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.Receipt;
import com.example.demo.model.Users;
import com.example.demo.repository.ReceiptRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    public static void main( String[] args ) {

        SpringApplication.run(DemoApplication.class, args);

    }

    @Autowired
    private ReceiptRepository receiptRepository;

    @Override
    public void run( String... args ) throws Exception {

       

    }

}
