
package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Ticket;
import com.example.demo.repository.TicketRepository;

/*
 * Spring 4.0 @RestController annotation combine @Controller và @ResponseBody
 * 
 */
@RestController
@RequestMapping( "/mainticket" )
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;
    // private TicketService ticketService;

    @GetMapping( value = "/ticket" )
    public ResponseEntity<List<Ticket>> findAllTickets() {

        List<Ticket> list = new ArrayList<>();
        list = ticketRepository.getAllTicket();
        return new ResponseEntity<List<Ticket>>(list, HttpStatus.OK);

    }

    @GetMapping( "/ticket/{id}" )
    public ResponseEntity<Ticket> findTicketById( @PathVariable long id ) {

        Optional<Ticket> ticket = ticketRepository.findById(id);

        if (ticket.isPresent()) { return new ResponseEntity<>(ticket.get(), HttpStatus.OK); }
        System.out.println("Get Mapping ID: " + id);

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping( "/ticket" )
    public ResponseEntity<Ticket> createTicket( Ticket ticket ) {

        Ticket createTicket = ticketRepository.save(new Ticket(ticket.getTicketPrice(),
                        ticket.getSeat(), ticket.getFlightDate(), ticket.getFlight(),
                        ticket.getPlaceFrom(), ticket.getPlaceTo(), ticket.getCustomer(),
                        ticket.getReceipt()));

        return new ResponseEntity<>(createTicket, HttpStatus.CREATED);

    }

    @PutMapping( "/ticket/{id}" )
    public ResponseEntity<Ticket> updateTicket( @PathVariable long id,
                    @Validated @RequestBody Ticket ticket ) {

        Optional<Ticket> findTicket = ticketRepository.findById(id);

        if (findTicket.isPresent()) {
            Ticket updateTicket = findTicket.get();
            updateTicket.setTicketPrice(ticket.getTicketPrice());
            updateTicket.setSeat(ticket.getSeat());
            updateTicket.setFlightDate(ticket.getFlightDate());
            updateTicket.setFlight(ticket.getFlight());
            updateTicket.setPlaceFrom(ticket.getPlaceFrom());
            updateTicket.setPlaceTo(ticket.getPlaceFrom());
            updateTicket.setCustomer(ticket.getCustomer());
            updateTicket.setReceipt(ticket.getReceipt());

            return new ResponseEntity<>(ticketRepository.save(updateTicket),
                            HttpStatus.OK);
        }

        System.out.println("PutMapping updateTicket ID: " + id);

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
