package com.example.demo.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Receipt implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "receipt_id" )
    private long receiptID;

    @Column( name = "receipt_buying_date" )
    private Date receiptBuyingDate;

    @Column( name = "total_price" )
    private long totalPrice;

    @ManyToOne
    @JoinColumn( name = "user_id" )
    private Users users;

    @OneToMany( cascade = CascadeType.ALL )
    @JsonIgnore
    private List<Ticket> lstTicket;

    public Receipt() {

        super();

    }

    public Date getReceiptBuyingDate() { return receiptBuyingDate; }

    public void setReceiptBuyingDate( Date receiptBuyingDate ) {

        this.receiptBuyingDate = receiptBuyingDate;

    }

    public long getTotalPrice() { return totalPrice; }

    public void setTotalPrice( long totalPrice ) { this.totalPrice = totalPrice; }

    public Users getUsers() { return users; }

    public void setUsers( Users users ) { this.users = users; }

    public List<Ticket> getLstTicket() { return lstTicket; }

    public void setLstTicket( List<Ticket> lstTicket ) { this.lstTicket = lstTicket; }

    public long getReceiptID() { return receiptID; }

}
