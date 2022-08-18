package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        // return userRepository.findAll();

    }

    @GetMapping( "/user/{id}" )
    public ResponseEntity<Users> getById( @PathVariable Long id ) {

        Users user = userRepository.findById(id).get();
        return ResponseEntity.ok(user);

    }

}
