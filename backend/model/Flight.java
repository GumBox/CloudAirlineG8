package com.example.demo.model;

import java.sql.Time;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table( name = "flight" )
public class Flight {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int flightID;

    @Column( name = "time_from" )
    private Time timeFrom;

    @Column( name = "time_to" )
    private Time timeTo;

    @Column( name = "plane_id" )
    private int planeID;

    @Column( name = "ticketid" )
    private int ticketID;

    @OneToOne( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JoinColumn( name = "ticket_id", referencedColumnName = "ticketid" )
    private Ticket ticket;

}
