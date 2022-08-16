@Repository
public interface ReceiptRepository extends JpaRepository<Receipt,int>{
    Receipt findById(int receiptId);
}