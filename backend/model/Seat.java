
package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name = "seat")
public class Seat {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column( name = "seat_id")
    private long seatID;
    
    @Column( name = "seat_number")
    private int seatNumber;
    
    @Column( name = "seat_class")
    private String seatClass;
    
}

