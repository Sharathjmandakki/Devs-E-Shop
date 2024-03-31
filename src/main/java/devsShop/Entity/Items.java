package devsShop.Entity;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
public class Items {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	String name;
	String category;
	int cost;
	@Lob
	@Column(length = 10000)
	String description;
	@Lob
	@Column(length = 10000)
	String specifications;
	@Lob
	@Column(length = 10000)
	String image;
	List<String> comments;
	String brand;
	boolean trending =false;
	int qty;
	public Items() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Items(long id, String name, String description, String category, int cost, String brand,String specifications, String image, List<String> comments,boolean trending,int qty) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.category = category;
		this.cost = cost;
		this.specifications = specifications;
		this.image = image;
		this.comments = comments;
		this.brand = brand;
		this.trending=trending;
		this.qty=qty;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public int getCost() {
		return cost;
	}


	public void setCost(int cost) {
		this.cost = cost;
	}

	public String getSpecifications() {
		return specifications;
	}


	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}


	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}


	public List<String> getComments() {
		return comments;
	}
	
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public void setComments(List<String> comments) {
		this.comments = comments;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public boolean isTrending() {
		return trending;
	}
	public void setTrending(boolean trending) {
		this.trending = trending;
	}
	@Override
	public String toString() {
		return "Items [id=" + id + ", name=" + name + ", description=" + description + ", category=" + category
				+ ", cost=" + cost + ", specifications=" +
				 specifications + ", image=" + image +  
				" comments=" + comments + ", brand=" + brand + "]";
	}
}
