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
@Table( name = "customer" )
public class Customer {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "customer_id" )
    private long customerID;

    @Column( name = "full_name" )
    private String fullName;

    private boolean gender;

    private String address;

    private String phone;

    private String email;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    private Set<Ticket> lstTicketCustomer;

    /**
     * 
     */
    public Customer() {

        super();

    }

    /**
     * @return the customerID
     */
    public long getCustomerID() { return customerID; }

    /**
     * @return the fullName
     */
    public String getFullName() { return fullName; }

    /**
     * @param fullName the fullName to set
     */
    public void setFullName( String fullName ) { this.fullName = fullName; }

    /**
     * @return the gender
     */
    public boolean isGender() { return gender; }

    /**
     * @param gender the gender to set
     */
    public void setGender( boolean gender ) { this.gender = gender; }

    /**
     * @return the address
     */
    public String getAddress() { return address; }

    /**
     * @param address the address to set
     */
    public void setAddress( String address ) { this.address = address; }

    /**
     * @return the phone
     */
    public String getPhone() { return phone; }

    /**
     * @param phone the phone to set
     */
    public void setPhone( String phone ) { this.phone = phone; }

    /**
     * @return the email
     */
    public String getEmail() { return email; }

    /**
     * @param email the email to set
     */
    public void setEmail( String email ) { this.email = email; }

}
