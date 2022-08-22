
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Ticket;
import com.example.demo.repository.TicketRepository;

/*
 * https://springframework.guru/exception-handling-in-spring-boot-rest-api/
 */

@RestController
@RequestMapping( "/mainticket/" )
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @GetMapping( "/ticket" )
    public List<Ticket> findAllTickets() {

        return ticketRepository.findAll();

    }

    @GetMapping( "/ticket/{id}" )
    public ResponseEntity<Ticket> findTicketById( @PathVariable long id ) {

        Ticket ticket = ticketRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException(
                                        "Can't Found ID: " + id));

        return ResponseEntity.ok(ticket);

    }

   
    @PostMapping( "/ticket/change/" )
    public ResponseEntity<Ticket> changeTicket( @PathVariable long id ) {

        Ticket ticket = ticketRepository.findById(id).orElseThrow(
                        () -> new ResourceNotFoundException("Can't Found ID: " + id));
        
        
        return null;
    }

}
