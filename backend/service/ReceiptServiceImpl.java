@Service
public class ReceiptServiceImpl implements ReceiptService, TicketService{
    @Autowired
    private ReceiptRepository receiptRepository;
    private TicketRepository ticketRepository;
    @Override
    public List<Receipt> getAllReceipt(){
        return receiptRepository.findAll();
    }
    @Override
    public List<Ticket> getAllTicket(){
        return ticketRepository.findAll();
    }
    @Override
    public Receipt getReceiptById(int id){
        Optional<Receipt> optional=receiptRepository.findById(id);
        Receipt receipt = null;
        if(optional.isPresent()){
            receipt=optional.get();
        }else{
            throw new RuntimeException("Hóa đơn không thấy với mã: " + id);
        }
        return receipt;
    }
    @Override
    public Ticket getTicketById(int id){
        Optional<Ticket> optional=ticketRepository.findById(id);
        Ticket ticket = null;
        if(optional.isPresent()){
            ticket=optional.get();
        }else{
            throw new RuntimeException("Vé không thấy với mã: " + id);
        }
        return Ticket;
}