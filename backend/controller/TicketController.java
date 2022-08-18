
 package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.TicketRepository;

@RestController
 @RequestMapping( "/ticket/" )
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;
}

