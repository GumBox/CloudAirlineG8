//package com.example.demo.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.model.Receipt;
//import com.example.demo.repository.ReceiptRepository;
//
//@Service
//public class ReceiptServiceImpl implements ReceiptService {
//
//    @Autowired
//    private ReceiptRepository receiptRepository;
//
//    @Override
//    public List<Receipt> getAllReceipt() { return receiptRepository.findAll(); }
//
//    @Override
//    public Receipt getReceiptById( long id ) {
//
//        Optional<Receipt> optional = receiptRepository.findById(id);
//        Receipt receipt = null;
//
//        if (optional.isPresent()) {
//            receipt = optional.get();
//        } else {
//            throw new RuntimeException("Can't Found ID: " + id);
//        }
//        return receipt;
//
//    }
//
//}