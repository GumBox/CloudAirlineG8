package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table( name = "ticket" )
public class Ticket {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int ticketID;

    @Column( name = "ticket_price" )
    private String ticketPrice;

    @Column( name = "ticket_class" )
    private String ticketClass;

    @Column( name = "seat_number" )
    private int seatNumber;

    @ManyToOne
    @JoinColumn( name = "receiptid" )
    private Receipt receipt;
    
}