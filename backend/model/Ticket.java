package com.example.demo.model;

import java.io.Serializable;
import java.sql.Date;

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

    @OneToOne
    @JsonIgnore
    @JoinColumn( name = "seat_id" )
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

    public Ticket() { super(); }

    
    /**
     * @return the customer
     */
    public Customer getCustomer() { return customer; }

    
    /**
     * @param customer the customer to set
     */
    public void setCustomer( Customer customer ) { this.customer = customer; }


    
    /**
     * @return the flightDate
     */
    public Date getFlightDate() { return flightDate; }


    
    /**
     * @param flightDate the flightDate to set
     */
    public void setFlightDate( Date flightDate ) { this.flightDate = flightDate; }


    
    /**
     * @return the place
     */
    public Place getPlace() { return place; }


    
    /**
     * @param place the place to set
     */
    public void setPlace( Place place ) { this.place = place; }


    
    /**
     * @return the receipt
     */
    public Receipt getReceipt() { return receipt; }


    
    /**
     * @param receipt the receipt to set
     */
    public void setReceipt( Receipt receipt ) { this.receipt = receipt; }


    
    /**
     * @return the seat
     */
    public Seat getSeat() { return seat; }


    
    /**
     * @param seat the seat to set
     */
    public void setSeat( Seat seat ) { this.seat = seat; }


    
    
    


}