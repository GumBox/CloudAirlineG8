package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Place;
import com.example.demo.repository.PlaceRepository;

@RestController
@RequestMapping( "/mainplace" )
public class PlaceController {

    @Autowired
    private PlaceRepository placeRepository;

    @GetMapping( value = "/place" )
    public ResponseEntity<List<Place>> findAllPlaces() {

        return new ResponseEntity<>(placeRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping( "/place/{id}" )
    public ResponseEntity<Place> findPlaceById( @PathVariable String id ) {

        Optional<Place> place = placeRepository.findById(id);

        if (place.isPresent()) {
            return new ResponseEntity<>(place.get(), HttpStatus.OK);
        }
        System.out.println("Get Mapping ID: " + id);

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping( "/place" )
    public ResponseEntity<Place> createPlace( Place place ) {

        Place createPlace = placeRepository.save(new Place(place.getPlace(), place.getAirportName()));

        return new ResponseEntity<>(createPlace, HttpStatus.CREATED);

    }

    @PutMapping( "/place/{id}" )
    public ResponseEntity<Place> updatePlace( @PathVariable String id,
                    @Validated @RequestBody Place place ) {

        Optional<Place> findPlace = placeRepository.findById(id);

        if (findPlace.isPresent()) {
            Place updatePlace = findPlace.get();
            updatePlace.setPlace(place.getPlace());
            updatePlace.setAirportName(place.getAirportName());
            
            return new ResponseEntity<Place>(placeRepository.save(updatePlace),
                            HttpStatus.OK);
        }

        System.out.println("PutMapping updatePlace ID: " + id);

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
