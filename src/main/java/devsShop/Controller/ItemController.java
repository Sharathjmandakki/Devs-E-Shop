package devsShop.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import devsShop.Entity.Items;
import devsShop.Entity.Orders;
import devsShop.Entity.Users;
import devsShop.Services.ItemsService;

@CrossOrigin("*")
@RestController
public class ItemController {
	@Autowired
	ItemsService is;

	@PostMapping("additem")
	public String addItem(@RequestBody Items i) {
		return is.addItem(i);
	}

	@PutMapping("updateitem")
	public String updateItem(@RequestBody Items i) {
		return is.updateItem(i);
	}

	@DeleteMapping("deleteitem")
	public String deleteItem(int id) {
		return is.deleteItem(id);
	}

	@GetMapping("viewallitems")
	public List<Items> viewAllItems() {
		return is.viewAllItems();
	}

	@GetMapping("Searcheditems")
	public List<Items> Search(@RequestBody Items i){
		return is.Search(i.getName());
	}
	@GetMapping("Searcheditems/{name}")
	public List<Items> Search(@PathVariable String name) {
		return is.Search(name);
	}

	@GetMapping("category")
	public List<String> allCategory() {
		return is.allCategory();
	}

	@PostMapping("sendmsg")
	public String Sent(@RequestBody helper h) {
		return is.sent(h.user, h.msg,h.getI());
	}
	// Test it out
	@GetMapping("stringtoarray/{name}")
	public List<String> stringToArray(@PathVariable String name){
		String[] arr=name.split(",");
		List<String> al=new ArrayList<>();
		for(String s:arr) {
			al.add(s);
		}
		System.out.println(al);
		return al;
	}
	@PostMapping("additemtotrending")
	public String addItemToTrending(@RequestBody Items i ) {
		System.out.println(i);
		return is.addItemToTrending(i.getId());
	}
	@PostMapping("removeitemfromtrending")
	public String removeItemFromTrending(@RequestBody Items i) {
		return is.removeItemFromTrending(i.getId());
	}
	@GetMapping("viewalltrendingitems")
	public List<Items> viewAllTrendingItems() {
		List<Items> its=new ArrayList<Items>();
		for(Items i:is.viewAllItems()) {
			if(i.isTrending()) {
				its.add(i);
			}
		}
		return its;
	}
	
//	@GetMapping("viewallitems")
////	public Items GetItem(@RequestBody Items i) {
////		return is.findByName(i.getName());
////	}
}

class helper {
	String msg;
	String user;
	Items i;
	@Override
	public String toString() {
		return "helper [msg=" + msg + ", user=" + user + ", i=" + i + "]";
	}
	public helper() {
		super();
		// TODO Auto-generated constructor stub
	}
	public helper(String msg, String user, Items i) {
		super();
		this.msg = msg;
		this.user = user;
		this.i = i;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public Items getI() {
		return i;
	}
	public void setI(Items i) {
		this.i = i;
	}
}
