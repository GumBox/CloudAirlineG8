@Service
public class TicketServiceImpl implements TicketService{
@Autowired
private TicketRepository ticketRepository;
@Override
public List<Ticket> getAllTicket(){
    return ticketRepository.findAll();
}
@Override
public void saveTicket(Ticket ticket){
    this.ticketRepository.save(ticket);
}
@Override
public Ticket getTicketById(int id){
    Optional<Ticket> optional = ticketRepository.findById(id);
    Ticket ticket = null;
    if (optional.isPresent()){
        ticket=optional.get();
    }else{
        throw new RuntimeException("Không tìm thấy vé: " + id);
    }
    return ticket;
}
}