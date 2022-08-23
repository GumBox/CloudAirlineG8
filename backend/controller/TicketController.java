
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Ticket;
import com.example.demo.repository.TicketRepository;

@RestController
@RequestMapping( "/mainticket" )
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
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

}
