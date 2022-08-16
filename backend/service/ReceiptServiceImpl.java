package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Receipt;
import com.example.demo.model.Ticket;
import com.example.demo.respository.ReceiptRepository;
import com.example.demo.respository.TicketRepository;

@Service
public class ReceiptServiceImpl implements ReceiptService {

    @Autowired
    private ReceiptRepository receiptRepository;
    private TicketRepository ticketRepository;

    @Override
    public List<Receipt> getAllReceipt() { return receiptRepository.findAll(); }

    @Override
    public List<Ticket> getAllTicket() { return ticketRepository.findAll(); }

    @Override
    public Receipt getReceiptById( long id ) {

        Optional<Receipt> optional = receiptRepository.findById(id);
        Receipt receipt = null;

        if (optional.isPresent()) {
            receipt = optional.get();
        } else {
            throw new RuntimeException("Hóa đơn không thấy với mã: " + id);
        }
        return receipt;

    }

    @Override
    public Ticket getTicketById( long id ) {

        Optional<Ticket> optional = ticketRepository.findById(id);
        Ticket ticket = null;

        if (optional.isPresent()) {
            ticket = optional.get();
        } else {
            throw new RuntimeException("Vé không thấy với mã: " + id);
        }
        return ticket;

    }

}