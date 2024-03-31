package devsShop.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import devsShop.Entity.Items;
import devsShop.Entity.Users;
import devsShop.Repository.UsersRepository;
import jakarta.servlet.http.HttpSession;

@Service
public class UsersService implements UsersServiceInterface {
	@Autowired
	UsersRepository ur;
	Users usr;

	@Override
	public String addUser(Users u) {
		// TODO Auto-generated method stub
		try {
			Users usr = user(u.getEmail());
			if (usr == null) {
				if (user(u.getName()) == null) {
					ur.save(u);
					return "User Added";
				} else {
					return "User Name exist";
				}
			} else {
				return "User Email exist";
			}
		} catch (Exception e) {
			return "Somting went worng please try again";
		}
	}

	@Override
	public String updateUser(Users u) {
		// TODO Auto-generated method stub
		try {
			Users usr = user(u.getEmail());
			usr.setRoal(u.getRoal());
			usr.setAddress(u.getAddress());
			ur.save(usr);
			return "User Updated";
		} catch (Exception e) {
			return "Somting went worng please try again";
		}
	}

	@Override
	public Users getUser(String email) {
		try {
			return user(email);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return null;
		}
	}

	@Override
	public List<Users> getAllUser() {
		// TODO Auto-generated method stub
		return ur.findAll();
	}

	@Override
	public List<Users> getSearchUser(Users u) {
		// TODO Auto-generated method stub
		try {
			ArrayList<Users> al = new ArrayList<Users>();
			al.add(user(u.getEmail()));
			return al;
		} catch (Exception e) {
			return (List<Users>) u;
		}

	}

	@Override
	public String deleteUser(long uid) {
		// TODO Auto-generated method stub
		try {
			ur.deleteById(uid);
			return "User has been deleted";
		} catch (Exception e) {
			return "Error";
		}
	}

	@Override
	public String userLogin(Users u) {
		// TODO Auto-generated method stub
		try {
			usr = user(u.getEmail());
			if (u.getPassword().equals(usr.getPassword())) {
				if (usr.getRoal().equals("Admin")) {
					return "Admin";
				} else {
					return "User";
				}
			} else {
				return "Password is not Correct ❌";
			}
		} catch (Exception e) {
			return "Not a user of devsShop 🚫";
		}
	}

	@Override
	public String updatePassword(Users u) {
		try {
			Users usr = ur.findByEmail(u.getEmail());
			if (usr.getPassword().equals(u.getPassword())) {
				return "This is Existing password";
			} else {
				usr.setPassword(u.getPassword());
				ur.save(usr);
				return "Updated";
			}
		} catch (Exception e) {
			// TODO: handle exception
			return "Error";
		}
	}

	public Users user(String email) throws Exception {
		Users u = ur.findByEmail(email);
		if (u == null) {
			u = ur.findByName(email);
		}
		return u;
	}

	public List<Items> CartItems() {
		// TODO Auto-generated method stub

		return usr.getCart();
	}

	public String addToCart(Items i, String email) {
		try {
			Users u = user(email);
			ArrayList<Items> itms = new ArrayList<>();
			if (u.getCart() != null) {
				itms.addAll(u.getCart());
			}
			for (Items it : itms) {
				if (it.getId() == i.getId()) {
					return "Item exist in Cart";
				}
			}
			itms.add(i);
			u.setCart(null);
			u.setCart(itms);
			updateUser(u);
			return "Item added to Cart";
		} catch (Exception e) {
			return "Server Error please try again";
		}
	}

	public String removeFromCart(Items i, String email) {
		try {
			Users u = user(email);
			List<Items> itms = u.getCart();
			ArrayList<Items> al = new ArrayList<>();
			for (Items it : itms) {
				if (it.getId() == i.getId()) {
//					itms.remove(it);
					continue;
				} else {
					al.add(it);
				}
			}
			u.setCart(null);
			u.setCart(al);
			updateUser(u);
			return "Removed From cart";
		} catch (Exception e) {
			return "Server Error please try again";
		}
	}
}
