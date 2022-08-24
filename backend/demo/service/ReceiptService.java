package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Receipt;

public interface ReceiptService {

    List<Receipt> getAllReceipt();

    Receipt getReceiptById( long id );

}
