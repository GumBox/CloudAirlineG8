package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Users;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping( "/mainuser/" )
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping( "/user" )
    public List<Users> getAllUser() {

        return userRepository.findAll();

    }

    @GetMapping( "/user/{id}" )
    public ResponseEntity<Users> getUsersById( @PathVariable Long id ) {

        Users muse = userRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException(
                                        "Employee not exist with id :" + id));
        return ResponseEntity.ok(muse);

    }

}
