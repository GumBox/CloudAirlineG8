package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Ticket;
import com.example.demo.repository.TicketRepository;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> getAllTicket() throws ResourceNotFoundException {

        return ticketRepository.findAll();

    }

    @Override
    public void saveTicket( Ticket ticket ) {

        this.ticketRepository.save(ticket);

    }

    @Override
    public Ticket getTicketById( long id ) throws ResourceNotFoundException {

        Optional<Ticket> optional = ticketRepository.findById(id);
        Ticket ticket = optional.get();

        if (optional.isPresent()) {
            ticket = optional.get();
        } else {
            throw new ResourceNotFoundException();
        }
        return ticket;

    }

}
