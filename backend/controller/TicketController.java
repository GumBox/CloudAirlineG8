
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
 * Spring 4.0 @RestController annotation kết hợp cả @Controller và @ResponseBody bên
 * trong,
 * 
 * @ResponseBody cho các hàm bên trong.
 * 
 */
@RestController
@RequestMapping( "/mainticket" )
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @GetMapping( value = "/ticket" )
    public List<Ticket> findAllTickets() {

        return ticketRepository.findAll();

    }

    @GetMapping( "/ticket/{id}" )
    public Ticket findTicketById( @PathVariable long id ) {

        Ticket ticket = ticketRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException(
                                        "Can't found ticket with ID: " + id));

        return ticket;

    }

    @PostMapping( "/ticket" )
    public ResponseEntity<Ticket> createTicket( Ticket ticket ) {

        Ticket createTicket = ticketRepository.save(new Ticket(ticket.getTicketPrice(),
                        ticket.getSeat(), ticket.getFlightDate(), ticket.getFlight(),
                        ticket.getPlace(), ticket.getCustomer(), ticket.getReceipt()));

        return new ResponseEntity<>(createTicket, HttpStatus.CREATED);
        

    }

}
