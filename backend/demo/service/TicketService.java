package com.example.demo.service;
import java.util.List;

import com.example.demo.model.Ticket;

public interface TicketService {

    List<Ticket> getAllTicket();

    void saveTicket( Ticket ticket );

    Ticket getTicketById( long id );

}