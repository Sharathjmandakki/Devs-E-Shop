package devsShop.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long uid;
	String name;
	String email;
	String roal="User";
	@ManyToMany
	List<Items> cart;
	String password;
	@Lob
	@Column(length = 10000)
	String address;
	@ManyToMany
	List<Orders> orders;
	public List<Items> getCart() {
		return cart;
	}
	public void setCart(List<Items> cart) {
		this.cart = cart;
	}
	public String getRoal() {
		return roal;
	}
	public void setRoal(String roal) {
		this.roal = roal;
	}
	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Orders> getOrders() {
		return orders;
	}
	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Users [uid=" + uid + ", name=" + name + ", email=" + email + ", roal=" + roal + ", password=" + password
				+ ", address=" + address + ", orders=" + orders + ", cart=" + cart + "]";
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Users(long uid, String name, String email, String password, List<Orders> orders,String roal,String address) {
		super();
		this.uid = uid;
		this.name = name;
		this.email = email;
		this.password = password;
		this.orders = orders;
		this.roal=roal;
		this.address=address;
	}
	
	
}
