package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name = "ticket" )
public class Ticket {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "ticket_id" )
    private int ticketID;

    @Column( name = "ticket_price" )
    private String ticketPrice;

    @Column( name = "ticket_class" )
    private String ticketClass;

    @Column( name = "seat_number" )
    private int seatNumber;
    
    @ManyToOne( fetch = FetchType.LAZY )
    @JoinColumn( name = "flight_id")
    private Flight flight;

    @ManyToOne
    @JoinColumn( name = "place_id" )
    private Place place;

    @ManyToOne
    @JoinColumn( name = "customer_id" )
    private Customer customer;

    @ManyToOne
    @JoinColumn( name = "receipt_id" )
    private Receipt receipt;

}