package com.example.demo.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
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

    @OneToOne
    @JsonIgnore
    @JoinColumn( name = "seat_id" )
    private Seat seat;

    @Column( name = "flight_date" )
    private Date flightDate;

    @ManyToOne
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

    public Ticket() {

        super();

    }

    public Ticket(String ticketPrice, Seat seat, Date flightDate, Flight flight, Place place,
                    Customer customer, Receipt receipt) {

        super();
        this.ticketPrice = ticketPrice;
        this.seat = seat;
        this.flightDate = flightDate;
        this.flight = flight;
        this.place = place;
        this.customer = customer;
        this.receipt = receipt;

    }

    public String getTicketPrice() { return ticketPrice; }

    public void setTicketPrice( String ticketPrice ) { this.ticketPrice = ticketPrice; }

    public Seat getSeat() { return seat; }

    public void setSeat( Seat seat ) { this.seat = seat; }

    public Date getFlightDate() { return flightDate; }

    public void setFlightDate( Date flightDate ) { this.flightDate = flightDate; }

    public Flight getFlight() { return flight; }

    public void setFlight( Flight flight ) { this.flight = flight; }

    public Place getPlace() { return place; }

    public void setPlace( Place place ) { this.place = place; }

    public Customer getCustomer() { return customer; }

    public void setCustomer( Customer customer ) { this.customer = customer; }

    public Receipt getReceipt() { return receipt; }

    public void setReceipt( Receipt receipt ) { this.receipt = receipt; }

    public long getTicketID() { return ticketID; }

}