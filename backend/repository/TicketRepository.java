package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query(value ="SELECT * FROM ticket",nativeQuery = true)
    public List<Ticket> getAllTicket();

}