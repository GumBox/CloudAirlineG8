package com.example.demo.model;

import java.io.Serializable;
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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "customer" )
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "customer_id" )
    private long customerID;

    @Column( name = "full_name" )
    private String fullName;

    private String gender;

    private String address;

    private String phone;

    private String email;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JsonIgnore
    private Set<Ticket> lstTicketCustomer;

    public Customer() {

        super();

    }

    public String getFullName() { return fullName; }

    public void setFullName( String fullName ) { this.fullName = fullName; }

    public String isGender() { return gender; }

    public void setGender( String gender ) { this.gender = gender; }

    public String getAddress() { return address; }

    public void setAddress( String address ) { this.address = address; }

    public String getPhone() { return phone; }

    public void setPhone( String phone ) { this.phone = phone; }

    public String getEmail() { return email; }

    public void setEmail( String email ) { this.email = email; }

    public Set<Ticket> getLstTicketCustomer() { return lstTicketCustomer; }

    public void setLstTicketCustomer( Set<Ticket> lstTicketCustomer ) {

        this.lstTicketCustomer = lstTicketCustomer;

    }

    public long getCustomerID() { return customerID; }

}
