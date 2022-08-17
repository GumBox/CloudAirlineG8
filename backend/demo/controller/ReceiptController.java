package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Receipt;
import com.example.demo.repository.ReceiptRepository;


@RestController
@RequestMapping( "/path/user" )
public class ReceiptController {

    @Autowired
    private ReceiptRepository receiptRepository;

    @GetMapping( "receipt" )
    public List<Receipt> findAllReceipts() {

        return receiptRepository.findAll();

    }
    
    @PostMapping
    
    
}
