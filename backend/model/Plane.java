package com.example.demo.model;

import java.io.Serializable;
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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "plane" )
public class Plane implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "plane_id" )
    private long planeID;

    @Column( name = "plane_brand" )
    private String planeBrand;

    @Column( name = "plane_code" )
    private String planeCode;

    @Column( name = "total_seat" )
    private int totalSeat;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JsonIgnore
    private Set<Flight> lstFlightsPlane;

}
