package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Receipt;
import com.example.demo.model.Ticket;
import com.example.demo.respository.ReceiptRepository;
import com.example.demo.respository.TicketRepository;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private ReceiptRepository receiptRepository;
    private TicketRepository ticketRepository;

    @Override
    public List<Receipt> getAllReceipt() { return receiptRepository.findAll(); }

    @Override
    public List<Ticket> getAllTicket() { return ticketRepository.findAll(); }

}