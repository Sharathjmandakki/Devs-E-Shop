package devsShop.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import devsShop.Entity.Items;

public interface ItemsRepository extends JpaRepository<Items, Long> {
	List<Items> findByCategory(String category);
	List<Items> findByName(String name);
}
