@Repository
public interface TicketRepository extends JpaRepository<Ticket, int>{
Ticket findById(int ticketId);
}