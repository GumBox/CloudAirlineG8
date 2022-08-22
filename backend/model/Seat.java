
package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table( name = "seat" )
public class Seat {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "seat_id" )
    private long seatID;

    @Column( name = "seat_number" )
    private int seatNumber;

    @Column( name = "seat_class" )
    private String seatClass;

    @OneToOne
    private Ticket ticket;
    
    public Seat() {

        super();

    }

    /**
     * @return the seatID
     */
    public long getSeatID() { return seatID; }

    /**
     * @return the seatNumber
     */
    public int getSeatNumber() { return seatNumber; }

    /**
     * @param seatNumber the seatNumber to set
     */
    public void setSeatNumber( int seatNumber ) { this.seatNumber = seatNumber; }

    /**
     * @return the seatClass
     */
    public String getSeatClass() { return seatClass; }

    /**
     * @param seatClass the seatClass to set
     */
    public void setSeatClass( String seatClass ) { this.seatClass = seatClass; }

}
