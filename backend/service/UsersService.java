public interface UsersService{
    List<Receipt> getAllReceipt();
    List<Ticket> getAllTicket();
    Page<Receipt> findPaginated(int pageNo, int pageSize, String sortField, String sortDirection);
}