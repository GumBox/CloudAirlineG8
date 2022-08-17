package com.example.demo.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table( name = "place" )
public class Place {

    @Id
    @Column( name = "place_id" )
    private String placeID;

    @Column( name = "place_name" )
    private String placeName;

    @Column( name = "airport_name" )
    private String airportName;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    private Set<Ticket> lstTicketPlace;

}
