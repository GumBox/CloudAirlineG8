package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Receipt;
import com.example.demo.repository.ReceiptRepository;

@RestController
@RequestMapping( "/mainreceipt" )
public class ReceiptController {

    @Autowired
    private ReceiptRepository receiptRepository;

    @GetMapping( "/receipt" )
    public List<Receipt> findAllReceipts() {

        return receiptRepository.findAll();

    }

    @GetMapping( "/receipt/{id}" )
    public Receipt findReceiptById( @PathVariable long id ) {

        Receipt receipt = receiptRepository.findById(id).orElseThrow(
                        () -> new ResourceNotFoundException("Can't Found ID: " + id));
        return receipt;

    }
    
    
}
