package devsShop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import devsShop.Entity.Items;
import devsShop.Entity.Users;
import devsShop.Services.UsersService;
import jakarta.servlet.http.HttpSession;
@CrossOrigin("*")
@RestController
public class UsersController {
	@Autowired
	UsersService us;
	public HttpSession hs;
	@PostMapping("/adduser")
	public String addUser(@RequestBody Users u) {
		return us.addUser(u);
	}
	
	@PutMapping("/updateuser")
	public String updateUser(@RequestBody Users u) {
		return us.updateUser(u);
	}
	@PostMapping("/updatepassword")
	public String updatePassword(@RequestBody Users u) {
		return us.updatePassword(u);
	}
	
	@GetMapping("/user")
	public Users logedinUser() {
		Users u=us.getUser(hs.getAttribute("email").toString());
		return u;
	}
	
	@GetMapping("/alluser")
	public List<Users> getAllUsers() {
		return us.getAllUser();
	}
	
	@PostMapping("/deleteuser")
	public String deleteUser(@RequestBody Users u) {
		return us.deleteUser(u.getUid());
	}
	
	@PostMapping("/login")
	public String userLogin(@RequestBody Users u,HttpSession hs) {
		this.hs=hs;
		hs.setAttribute("email", u.getEmail());
		return us.userLogin(u);
	}
	@GetMapping("/logout")
	public void logOut() {
		hs.removeAttribute("email");
	}
	@PostMapping("/searchuser")
	public List<Users> Search(@RequestBody Users u) {
		return us.getSearchUser(u);
	}
	@GetMapping("cartitems")
	public List<Items> CartItems(){
		System.out.println("ddata");
		return us.CartItems();
	}
	@PostMapping("addtocart")
	public String addToCart(@RequestBody Items i) {
		return us.addToCart(i,hs.getAttribute("email").toString());
	}
	@PostMapping("deletefromcart")
	public String removeFromCart(@RequestBody Items i) {
		return us.removeFromCart(i,hs.getAttribute("email").toString());
	}
}
