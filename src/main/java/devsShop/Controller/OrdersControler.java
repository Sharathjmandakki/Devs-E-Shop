package devsShop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import devsShop.Entity.Items;
import devsShop.Entity.Orders;
import devsShop.Entity.Users;
import devsShop.Services.OrderServices;
import devsShop.Services.UsersService;
@CrossOrigin("*")
@RestController
public class OrdersControler {
	Orders od;
	@Autowired
	OrderServices os;	
	@PostMapping("vieworders")
	public List<Orders> viewOrders(@RequestBody Users u){
		return os.viewOrders(u);
	}
	@GetMapping("allorders")
	public List<Orders> allOrders(){
		return os.allOrders();
	}
	@PostMapping("order")
	public List<Orders> oneOrder(@RequestBody Orders o){
		return os.oneOrder(o);
	}
	@PostMapping("createOrder")//after payment
	public String createOrder(@RequestBody Orders o ) {
		od=os.createOrder(o);
		if(od==null) {
			return "Error";
		}else {
			return "Created";
		}
	}
	@PostMapping("buyallcart")//after payment
	public String buyNow(@RequestBody Users u ) {
		return os.buyNow(od.getOid(),u);
	}
	@PostMapping("delivereddate")
	public String updateDeliveryDate(@RequestBody Orders o) {
		return os.updateDeliveryDate(o);
	}
}
