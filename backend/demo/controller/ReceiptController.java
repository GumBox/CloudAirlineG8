package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<Receipt> findReceiptById( @PathVariable long id ) {

        Optional<Receipt> receipt = receiptRepository.findById(id);

        if (receipt.isPresent()) { return new ResponseEntity<>(receipt.get(), HttpStatus.OK); }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
