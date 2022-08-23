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

    /**
     * @return the timeFrom
     */
    public Time getTimeFrom() { return timeFrom; }

    /**
     * @param timeFrom the timeFrom to set
     */
    public void setTimeFrom( Time timeFrom ) { this.timeFrom = timeFrom; }

    /**
     * @return the timeTo
     */
    public Time getTimeTo() { return timeTo; }

    /**
     * @param timeTo the timeTo to set
     */
    public void setTimeTo( Time timeTo ) { this.timeTo = timeTo; }

    /**
     * @return the plane
     */
    public Plane getPlane() { return plane; }

    /**
     * @param plane the plane to set
     */
    public void setPlane( Plane plane ) { this.plane = plane; }

    /**
     * @return the flightID
     */
    public long getFlightID() { return flightID; }

}
