@Service
public class UsersServiceImpl implements UsersService{
    @Autowired
    private UsersRepository usersRepository;
    @Override
    public List<Receipt> getAllReceipt(){
        return usersRepository.findAll();
    }
    @Override
    public List<Ticket> getAllTicket(){
        return usersRepository.findAll();
    }
}