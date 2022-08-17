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
@Table( name = "plane" )
public class Plane {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "plane_id" )
    private int planeID;

    @Column( name = "plane_brand" )
    private String planeBrand;

    @Column( name = "plane_code" )
    private String planeCode;

    @Column( name = "plane_seat" )
    private int totalSeat;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    private Set<Flight> lstFlightsPlane;

}
