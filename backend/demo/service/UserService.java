package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.model.Receipt;
import com.example.demo.model.Ticket;

public interface UserService {

    List<Receipt> getAllReceipt();

    List<Ticket> getAllTicket();

    Page<Receipt> findPaginated( int pageNo, int pageSize, String sortField,
                    String sortDirection );

}