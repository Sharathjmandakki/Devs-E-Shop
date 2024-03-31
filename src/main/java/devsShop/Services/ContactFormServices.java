package devsShop.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devsShop.Entity.ContactForm;
import devsShop.Repository.ContactFormRepository;
@Service
public class ContactFormServices implements ContactFormInterface{
	@Autowired
	ContactFormRepository cfr;
	@Override
	public String addMessage(ContactForm cf) {
		// TODO Auto-generated method stub
		cfr.save(cf);
		return "added";
	}

	@Override
	public List<ContactForm> viewContactForm() {
		// TODO Auto-generated method stub
		return cfr.findAll();
	}

	@Override
	public String deleteMessage(ContactForm cf) {
		// TODO Auto-generated method stub
		cfr.deleteById(cf.getId());
		return "deleted";
	}

}
