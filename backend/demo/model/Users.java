package com.example.demo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Users {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "user_id" )
    private int userID;

    @Column( name = "full_name" )
    private String fullName;

    private boolean gender;

    private String address;

    private int phone;

    private String email;

    @OneToMany( fetch = FetchType.LAZY, mappedBy = "users" )
    private Set<Receipt> lstReceipt;

    public Users() { super();
     }

    public Users(String fullName, boolean gender, String address, int phone,
                    String email) {

        super();
        this.fullName = fullName;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.email = email;

    }

    /**
     * @return the userID
     */
    public int getUserID() { return userID; }

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
    public int getPhone() { return phone; }

    /**
     * @param phone the phone to set
     */
    public void setPhone( int phone ) { this.phone = phone; }

    /**
     * @return the email
     */
    public String getEmail() { return email; }

    /**
     * @param email the email to set
     */
    public void setEmail( String email ) { this.email = email; }

}
