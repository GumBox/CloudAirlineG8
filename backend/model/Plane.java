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

    public Plane() {

        super();

    }

    /**
     * @return the planeBrand
     */
    public String getPlaneBrand() { return planeBrand; }

    /**
     * @param planeBrand the planeBrand to set
     */
    public void setPlaneBrand( String planeBrand ) { this.planeBrand = planeBrand; }

    /**
     * @return the planeCode
     */
    public String getPlaneCode() { return planeCode; }

    /**
     * @param planeCode the planeCode to set
     */
    public void setPlaneCode( String planeCode ) { this.planeCode = planeCode; }

    /**
     * @return the totalSeat
     */
    public int getTotalSeat() { return totalSeat; }

    /**
     * @param totalSeat the totalSeat to set
     */
    public void setTotalSeat( int totalSeat ) { this.totalSeat = totalSeat; }

    /**
     * @return the lstFlightsPlane
     */
    public Set<Flight> getLstFlightsPlane() { return lstFlightsPlane; }

    /**
     * @param lstFlightsPlane the lstFlightsPlane to set
     */
    public void setLstFlightsPlane( Set<Flight> lstFlightsPlane ) {

        this.lstFlightsPlane = lstFlightsPlane;

    }

    /**
     * @return the planeID
     */
    public long getPlaneID() { return planeID; }

}
