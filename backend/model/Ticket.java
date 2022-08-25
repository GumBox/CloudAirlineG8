package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "ticket" )
public class Ticket  {


    @Id
    @Column( name = "ticket_id" )
    private String ticketID;

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
    @JoinColumn( name = "id_place_from" )
    private Place placeFrom;

    @ManyToOne
    @JoinColumn( name = "id_place_to" )
    private Place placeTo;

    @ManyToOne
    @JoinColumn( name = "customer_id" )
    private Customer customer;

    @ManyToOne
    @JoinColumn( name = "receipt_id" )
    private Receipt receipt;

    public Ticket() {

        super();

    }

    public Ticket(String ticketPrice, Seat seat, Date flightDate, Flight flight,
                    Place placeFrom, Place placeTo, Customer customer, Receipt receipt) {

        super();
        this.ticketPrice = ticketPrice;
        this.seat = seat;
        this.flightDate = flightDate;
        this.flight = flight;
        this.placeFrom = placeFrom;
        this.placeTo = placeTo;
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

    public Place getPlaceFrom() { return placeFrom; }

    public void setPlaceFrom( Place placeFrom ) { this.placeFrom = placeFrom; }

    public Place getPlaceTo() { return placeTo; }

    public void setPlaceTo( Place placeTo ) { this.placeTo = placeTo; }

    public Customer getCustomer() { return customer; }

    public void setCustomer( Customer customer ) { this.customer = customer; }

    public Receipt getReceipt() { return receipt; }

    public void setReceipt( Receipt receipt ) { this.receipt = receipt; }

    public String getTicketID() { return ticketID; }

}