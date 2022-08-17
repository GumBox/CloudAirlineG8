package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.model.Receipt;
import com.example.demo.model.Ticket;

public class UserServiceImp implements UserService {

    @Override
    public List<Receipt> getAllReceipt() { return null; }

    @Override
    public List<Ticket> getAllTicket() { return null; }

    @Override
    public Page<Receipt> findPaginated( int pageNo, int pageSize, String sortField,
                    String sortDirection ) {

        return null;

    }

}
