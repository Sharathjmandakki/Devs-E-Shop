package devsShop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import devsShop.Entity.ContactForm;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long>{
	
}
