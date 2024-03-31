package devsShop.Services;

import java.util.List;

import devsShop.Entity.Items;
import devsShop.Entity.Orders;
import devsShop.Entity.Users;

public interface OrdersInterface {
	String buyNow(long oid,Users u);
	List<Orders> viewOrders(Users u);
	List<Orders> allOrders();
	List<Orders> oneOrder(Orders o);
	String updateDeliveryDate(Orders o);
}
