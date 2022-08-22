package com.example.demo.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "ticket" )
public class Ticket implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "ticket_id" )
    private long ticketID;

    @Column( name = "ticket_price" )
    private String ticketPrice;

    @OneToOne( cascade = CascadeType.ALL )
    @JoinColumn( name = "seat_id")
    @JsonIgnore
    private Seat seat;

    @Column( name = "flight_date" )
    private Date flightDate;

    @ManyToOne( fetch = FetchType.LAZY )
    @JoinColumn( name = "flight_id" )
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