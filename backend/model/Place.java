package com.example.demo.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "place" )
public class Place implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column( name = "place_id" )
    private String placeID;

    @Column( name = "place_name" )
    private String placeName;

    @Column( name = "airport_name" )
    private String airportName;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JsonIgnore
    private Set<Ticket> lstTicketPlace;

    public Place() {

        super();

    }

    /**
     * @return the placeName
     */
    public String getPlaceName() { return placeName; }

    /**
     * @param placeName the placeName to set
     */
    public void setPlaceName( String placeName ) { this.placeName = placeName; }

    /**
     * @return the airportName
     */
    public String getAirportName() { return airportName; }

    /**
     * @param airportName the airportName to set
     */
    public void setAirportName( String airportName ) { this.airportName = airportName; }

    /**
     * @return the lstTicketPlace
     */
    public Set<Ticket> getLstTicketPlace() { return lstTicketPlace; }

    /**
     * @param lstTicketPlace the lstTicketPlace to set
     */
    public void setLstTicketPlace( Set<Ticket> lstTicketPlace ) {

        this.lstTicketPlace = lstTicketPlace;

    }

    /**
     * @return the placeID
     */
    public String getPlaceID() { return placeID; }

}
