
package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table( name = "seat" )
public class Seat {

    @Id
    @Column( name = "seat_id" )
    private String seatID;

    @Column( name = "seat_number" )
    private int seatNumber;

    @Column( name = "seat_class" )
    private String seatClass;

    @OneToOne( mappedBy = "seat", cascade = CascadeType.ALL, fetch = FetchType.LAZY )
    private Ticket ticket;

    public Seat() {

        super();

    }

    public int getSeatNumber() { return seatNumber; }

    public void setSeatNumber( int seatNumber ) { this.seatNumber = seatNumber; }

    public String getSeatClass() { return seatClass; }

    public void setSeatClass( String seatClass ) { this.seatClass = seatClass; }

    public Ticket getTicket() { return ticket; }

    public void setTicket( Ticket ticket ) { this.ticket = ticket; }

    public String getSeatID() { return seatID; }

}
