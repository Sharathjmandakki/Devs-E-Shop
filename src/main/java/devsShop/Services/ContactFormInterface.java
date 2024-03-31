package devsShop.Services;

import java.util.List;

import devsShop.Controller.ContactFormController;
import devsShop.Entity.ContactForm;

public interface ContactFormInterface {
	List<ContactForm> viewContactForm();
	String deleteMessage(ContactForm cf);
	String addMessage(ContactForm cf);
}
