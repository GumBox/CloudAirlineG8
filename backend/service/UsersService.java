package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Receipt;
import com.example.demo.model.Ticket;

public interface UsersService {

    List<Receipt> getAllReceipt();

    List<Ticket> getAllTicket();

}