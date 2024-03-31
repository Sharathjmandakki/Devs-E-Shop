package devsShop.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
@Entity
public class Trendings {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	@Lob
	@Column(length = 5000)
	String image;
	String name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Trendings() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Trendings(int id, String image, String name) {
		super();
		this.id = id;
		this.image = image;
		this.name = name;
	}
	@Override
	public String toString() {
		return "Trendings [id=" + id + ", Image=" + image + ", name=" + name + "]";
	}
}
