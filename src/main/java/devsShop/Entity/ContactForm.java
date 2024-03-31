package devsShop.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class ContactForm {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	String email;
	String username;
	@Lob
	@Column(length = 10000)
	String message;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public ContactForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ContactForm [id=" + id + ", email=" + email + ", username=" + username + ", message=" + message + "]";
	}

	public ContactForm(long id, String email, String username, String message) {
		super();
		this.id = id;
		this.email = email;
		this.username = username;
		this.message = message;
	}

}
