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

    public Flight() {

        super();

    }

    public Time getTimeFrom() { return timeFrom; }

    public void setTimeFrom( Time timeFrom ) { this.timeFrom = timeFrom; }

    public Time getTimeTo() { return timeTo; }

    public void setTimeTo( Time timeTo ) { this.timeTo = timeTo; }

    public Set<Ticket> getLstTicketFlight() { return lstTicketFlight; }

    public void setLstTicketFlight( Set<Ticket> lstTicketFlight ) {

        this.lstTicketFlight = lstTicketFlight;

    }

    public Plane getPlane() { return plane; }

    public void setPlane( Plane plane ) { this.plane = plane; }

    public long getFlightID() { return flightID; }

}
