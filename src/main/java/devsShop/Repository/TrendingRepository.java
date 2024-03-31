package devsShop.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import devsShop.Entity.Trendings;

public interface TrendingRepository extends JpaRepository<Trendings, Integer> {
	List<Trendings> findByName(String name);
}
