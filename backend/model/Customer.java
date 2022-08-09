/*
 * GumBox Inc
 * (c) 2022 GumBox Inc. Viet Nam
 *
 */
package com.cloudairline.model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 *
 * @author falcon
 */
@Entity
@Table( name = "customer" )
public class Customer {
    
    private String fullname;
    private int age;
    
}
