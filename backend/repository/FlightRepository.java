/*
 * GumBox Inc
 * (c) 2022 GumBox Inc. Viet Nam
 *
 */
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Flight;

/**
 *
 * @author Blue Maxx
 */
public interface FlightRepository extends JpaRepository<Flight, Long> {

}
