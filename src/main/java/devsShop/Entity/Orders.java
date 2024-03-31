package devsShop.Entity;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long oid;
	@ManyToMany
	List<Items> item;
	String user;
	long total;
	String date=LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
	boolean paid=false;
	String deliveryDate;
	
	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public long getOid() {
		return oid;
	}

	public void setOid(long oid) {
		this.oid = oid;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public List<Items> getItem() {
		return item;
	}

	public void setItem(List<Items> item) {
		this.item = item;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Orders(long oid, List<Items> item,String user,long total,String date,boolean paid) {
		super();
		this.oid = oid;
		this.item = item;
		this.user=user;
		this.total=total;
		this.date=date;
		this.paid=paid;
	}

	@Override
	public String toString() {
		return "Orders [oid=" + oid + ", item=" + item + ", user=" + user + ", total=" + total + ", date=" + date
				+ ", paid=" + paid + "]";
	}

}
