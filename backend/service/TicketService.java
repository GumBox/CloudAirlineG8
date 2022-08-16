public interface TicketService{
    List<Ticket> getAllTicket();
    void saveTicket(Ticket ticket);
    Ticket getTicketById(int id);

}