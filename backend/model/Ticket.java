/*
 * GumBox Inc
 * (c) 2022 GumBox Inc. Viet Nam
 *
 */
package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 *
 * @author Blue Maxx
 */
@Entity
public class Ticket {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "ticket_id")
    private int ticketID;
    
    private String ticketPrice;
    
    private String ticketClass;
    
    private int seatNumber;
    
    @ManyToOne
    @JoinColumn(name = "receipt_id")
    private Receipt receiptID;
}   

