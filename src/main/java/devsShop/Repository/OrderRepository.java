package devsShop.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import devsShop.Entity.Orders;
import devsShop.Entity.Items;


public interface OrderRepository extends JpaRepository<Orders, Long> {
	Orders findByDate(String date);
	//update this
	List<Orders> findByItem(List<Items> item);
	List<Orders> findByUser(String user);
}
