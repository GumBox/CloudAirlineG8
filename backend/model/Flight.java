package com.example.demo.model;

import java.io.Serializable;
import java.sql.Time;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "flight" )
public class Flight implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "flight_id" )
    private long flightID;

    @Column( name = "time_from" )
    private Time timeFrom;

    @Column( name = "time_to" )
    private Time timeTo;

    @OneToMany( cascade = CascadeType.ALL )
    @JsonIgnore
    private Set<Ticket> lstTicketFlight;

    @ManyToOne
    @JoinColumn( name = "plane_id" )
    private Plane plane;

}
