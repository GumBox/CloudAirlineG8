
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Seat;
import com.example.demo.repository.SeatRepository;

/*
 * https://springframework.guru/exception-handling-in-spring-boot-rest-api/
 */

@RestController
@RequestMapping( "/mainseat" )
public class SeatController {

    @Autowired
    private SeatRepository seatRepository;

    @GetMapping( "/seat/" )
    public ResponseEntity<List<Seat>> findAllTickets() {

        return new ResponseEntity<>( seatRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping( "/seat/{id}" )
    public Seat findTicketById( @PathVariable long id ) {

        Seat seat = seatRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException(
                                        "Can't found seat with ID: " + id));

        return seat;

    }

}
