/*
 * GumBox Inc
 * (c) 2022 GumBox Inc. Viet Nam
 *
 */
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Place;

/**
 *
 * @author Blue Maxx
 */
public interface PlaceRepository extends JpaRepository<Place, Long> {

}
