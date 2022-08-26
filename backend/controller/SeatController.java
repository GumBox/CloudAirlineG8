
package com.example.demo.controller;

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

        return new ResponseEntity<>(seatRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping( "/seat/{id}" )
    public Seat findTicketById( @PathVariable long id ) {

        Seat seat = seatRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException(
                                        "Can't found seat with ID: " + id));

        return seat;

    }

    @PostMapping( "/seat" )
    public ResponseEntity<Seat> createTicket( Seat seat ) {

        Seat createSeat = seatRepository
                        .save(new Seat(seat.getSeatNumber(), seat.getSeatClass()));

        return new ResponseEntity<>(createSeat, HttpStatus.CREATED);

    }

    @PutMapping( "/ticket/{id}" )
    public ResponseEntity<Seat> updateSeat( @PathVariable long id,
                    @Validated @RequestBody Seat seat ) {

        Optional<Seat> findSeat = seatRepository.findById(id);

        if (findSeat.isPresent()) {
            Seat updateSeat = findSeat.get();
            updateSeat.setSeatNumber(seat.getSeatNumber());
            updateSeat.setSeatClass(seat.getSeatClass());

            return new ResponseEntity<>(seatRepository.save(updateSeat),
                            HttpStatus.OK);
        }

        System.out.println("PutMapping updateSeat ID: " + id);

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
