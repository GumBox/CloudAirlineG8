package com.example.demo.model;

import java.sql.Date;
import java.util.Set;

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
    @Column (name = "receipt_id")
    private int receiptID;
        
    
    @Column( name = "receipt_buying_date" )
    private Date receiptBuyingDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;
    
    

}
