package devsShop.Services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devsShop.Controller.UsersController;
import devsShop.Entity.Items;
import devsShop.Entity.Orders;
import devsShop.Entity.Users;
import devsShop.Repository.OrderRepository;
import devsShop.Repository.UsersRepository;
@Service
public class OrderServices implements OrdersInterface {
	@Autowired
	OrderRepository or;
	@Autowired
	UsersService us;
	@Autowired
	UsersRepository ur;
	@Override
	public String buyNow(long oid,Users user) {
		// TODO Auto-generated method stub
		try {
			Orders od=or.findById(oid).get();
			Users u=us.user(user.getEmail());
			long total=0;
			for(Items i:u.getCart()) {
				total+=i.getCost();
			}
			// payment
			
			Orders ods=update(u.getCart(), oid, u.getName(),total);
			List<Orders> o=or.findByUser(u.getName());
			if(o==null) {
				o.add(ods);
			}
			Users usr=ur.findByName(u.getName());
			usr.setCart(null);
			usr.setOrders(o);
			ur.save(usr);
			return "added";
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return "Error";
		}
	}

	@Override
	public List<Orders> viewOrders(Users u ) {
		// TODO Auto-generated method stub
		try {
			return or.findByUser(u.getName());
		}catch (Exception e) {
			// TODO: handle exception
			return or.findAll();
		}
	}

	public Orders createOrder(Orders o) {
		or.save(o);
		// TODO Auto-generated method stub
		Orders odr=null;
		for(Orders od:or.findByItem(o.getItem())) {
			odr=od;
		}
		if(odr==null) {
			odr=or.findByDate(o.getDate());
		}
		return odr;
	}
	
	public Orders update(List<Items> items,long oid,String name,long total) {
		Orders od=or.findById(oid).get();
		od.setItem(items);
		od.setUser(name);
		od.setTotal(total);
		return od;
	}

	@Override
	public List<Orders> allOrders() {
		// TODO Auto-generated method stub
		return or.findAll();
	}
	
	@Override
	public List<Orders> oneOrder(Orders o) {
		// TODO Auto-generated method stub
		List<Orders> odr=new ArrayList<>();
		odr.add(or.findById(o.getOid()).get());
		return odr;
	}

	@Override
	public String updateDeliveryDate(Orders o) {
		try {
			Orders od=or.findById(o.getOid()).get();
			od.setDeliveryDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
			or.save(od);
			return "Updated";
		}catch (Exception e) {
			return "Somting  Went Wrong while Updating Delivered Date";
		}
	}
}
