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
    
    private String fullName;
    
    private boolean gender;
    
    private String address;
    
    private int phone;
    
    private String email;
    
   
    
}
