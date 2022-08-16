package com.example.demo.model;

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

@Entity
public class Receipt {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int receiptID;

    @Column( name = "receipt_buying_date" )
    private Date receiptBuyingDate;

    @ManyToOne
    @JoinColumn( name = "userid" )
    private Users users;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Ticket> lstTicket;
    
    
}
