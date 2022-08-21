package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Ticket;
import com.example.demo.exception.ResourceNotFoundException;

public interface TicketService {

    List<Ticket> getAllTicket() throws ResourceNotFoundException;

    void saveTicket( Ticket ticket );

    Ticket getTicketById( long id ) throws ResourceNotFoundException;

}
