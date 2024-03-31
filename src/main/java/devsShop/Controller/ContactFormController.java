package devsShop.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import devsShop.Entity.ContactForm;
import devsShop.Entity.Items;
import devsShop.Services.ContactFormServices;
import devsShop.Services.ItemsService;
@CrossOrigin("*")
@RestController
public class ContactFormController {
	@Autowired
	ContactFormServices cfs;
	@Autowired
	ItemsService is;
	@PostMapping("addform")
	public String addMessage(@RequestBody ContactForm cf) {
		return cfs.addMessage(cf);
	}
	
	@GetMapping("viewForm")
	public List<ContactForm> getMessage() {
		return cfs.viewContactForm();
	}
	
	@PostMapping("deleteForm")
	public String deleteMessage(@RequestBody ContactForm cf) {
		return cfs.deleteMessage(cf);
	}
	@GetMapping("counts")
	public List<Count> Counts() {
		List<String> str=is.allCategory();
		List<Count> lc=new ArrayList<Count>();
		for(int i=0;i<str.size();i++) {
			List<Items> it=is.Search(str.get(i));
			int total=it.size();
			Count c=new Count(str.get(i),it,total);
			lc.add(c);
		}
		return lc;
	}
}

class Count{
	String cat;
	List<Items> items;
	int count=0;
	public String getCat() {
		return cat;
	}
	public void setCat(String cat) {
		this.cat = cat;
	}
	public List<Items> getItems() {
		return items;
	}
	public void setItems(List<Items> items) {
		this.items = items;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "Count [cat=" + cat + ", items=" + items + ", Count=" + count + "]";
	}
	public Count(String cat, List<Items> items, int count) {
		super();
		this.cat = cat;
		this.items = items;
		this.count = count;
	}
	public Count() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}