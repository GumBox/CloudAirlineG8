package com.example.demo.model;

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

@Entity
@Table( name = "customer")
public class Customer {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column( name = "customer_id")
    private int customerID;
    
    @Column( name = "full_name")
    private String fullName;
    
    private boolean gender;
    
    private String address;
    
    private String phone;
    
    private String email;
    
    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Ticket> lstTicketCustomer;
    
}

