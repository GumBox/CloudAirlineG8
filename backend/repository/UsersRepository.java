@Repository
public interface UsersRepository extends JpaRepository<Users, int>{
    Users findById(int userID);
}