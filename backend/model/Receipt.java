package com.example.demo.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
    
    @Column( name = "total_price")
    private long totalPrice;
    
    @ManyToOne
    @JoinColumn( name = "user_id" )
    private Users users;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JsonIgnore
    private List<Ticket> lstTicket;

    public Receipt() {

        super();

    }

    public Receipt(Date receiptBuyingDate, Users users) {

        super();
        this.receiptBuyingDate = receiptBuyingDate;
        this.users = users;

    }

    /**
     * @return the receiptID
     */
    public long getReceiptID() { return receiptID; }

    /**
     * @return the receiptBuyingDate
     */
    public Date getReceiptBuyingDate() { return receiptBuyingDate; }

    /**
     * @param receiptBuyingDate the receiptBuyingDate to set
     */
    public void setReceiptBuyingDate( Date receiptBuyingDate ) {

        this.receiptBuyingDate = receiptBuyingDate;

    }

    /**
     * @return the users
     */
    public Users getUsers() { return users; }

    /**
     * @param users the users to set
     */
    public void setUsers( Users users ) { this.users = users; }

    
    /**
     * @param receiptID the receiptID to set
     */
    public void setReceiptID( long receiptID ) { this.receiptID = receiptID; }

    
}
