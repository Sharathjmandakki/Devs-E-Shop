package devsShop.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import devsShop.Entity.Users;

public interface UsersRepository extends JpaRepository<Users, Long>{
	Users findByEmail(String email);
	Users findByName(String name);
}
