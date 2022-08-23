
package com.example.demo.model;

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
public class Seat {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "seat_id" )
    private long seatID;

    @Column( name = "seat_number" )
    private int seatNumber;

    @Column( name = "seat_class" )
    private String seatClass;

    @OneToOne( mappedBy = "seat", cascade = CascadeType.ALL, fetch = FetchType.LAZY )
    private Ticket ticket;

    public Seat() {

        super();

    }

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

    /**
     * @return the ticket
     */
    public Ticket getTicket() { return ticket; }

    /**
     * @param ticket the ticket to set
     */
    public void setTicket( Ticket ticket ) { this.ticket = ticket; }

    /**
     * @return the seatID
     */
    public long getSeatID() { return seatID; }

}
