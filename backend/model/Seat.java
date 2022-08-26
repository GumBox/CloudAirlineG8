
package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table( name = "seat" )
public class Seat implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "seat_id" )
    private long seatID;

    @Column( name = "seat_number" )
    private int seatNumber;

    @Column( name = "seat_class" )
    private String seatClass;

    @OneToOne( cascade = CascadeType.ALL, fetch = FetchType.LAZY )
    private Ticket ticket;

    public Seat() {

        super();

    }

    public Seat(int seatNumber, String seatClass) {

        super();
        this.seatNumber = seatNumber;
        this.seatClass = seatClass;

    }

    public int getSeatNumber() { return seatNumber; }

    public void setSeatNumber( int seatNumber ) { this.seatNumber = seatNumber; }

    public String getSeatClass() { return seatClass; }

    public void setSeatClass( String seatClass ) { this.seatClass = seatClass; }

    public Ticket getTicket() { return ticket; }

    public void setTicket( Ticket ticket ) { this.ticket = ticket; }

    public long getSeatID() { return seatID; }

}
