public interface ReceiptService{
    List<Receipt> getAllReceipt();
    List<Ticket> getAllTicket();
    Receipt getReceiptById(int id);
    Ticket getTicketById(int id);
}