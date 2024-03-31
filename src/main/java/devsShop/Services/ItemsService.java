package devsShop.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import devsShop.Entity.Items;
import devsShop.Repository.ItemsRepository;

@Service
public class ItemsService implements ItemsServiceInterface {
	@Autowired
	ItemsRepository ir;
	@Override
	public String addItem(Items i) {
		ir.save(i);
		return "Added";
	}

	@Override
	public String deleteItem(long id) {
		// TODO Auto-generated method stub
		ir.deleteById(id);
		return "Deleted";
	}

	@Override
	public String updateItem(Items i) {
		// TODO Auto-generated method stub
		ir.save(i);
		return "Updated";
	}

	@Override
	public List<Items> viewAllItems() {
		// TODO Auto-generated method stub
		return ir.findAll();
	}

	@SuppressWarnings("null")
	@Override
	public List<Items> Search(String name) {
		List<Items> its=ir.findByCategory(name);
		if(ir.findByName(name)!=null) {
			its.addAll(ir.findByName(name));
		}
		List<Items> itemList=new ArrayList<Items>();
		for(Items i:its) {
			if(!itemList.contains(i)) {
				itemList.add(i);
			}
		}
		return itemList;
	}
	
	public List<String> allCategory(){
		ArrayList<String> al=new ArrayList<>() ;
		TreeSet<String> ts=new TreeSet<>();
		for(Items i:viewAllItems()) {
			al.add(i.getCategory());
		}
		ts.addAll(al);
		al.clear();
		al.addAll(ts);
		
		return al;
	}
	public String sent(String user,String msg,Items i) {
		List<String> al=new ArrayList<String>();
		// TODO Auto-generated method stub
		if(i.getComments()!=null) {
			al.addAll(i.getComments());
		}
		al.add(user+":"+msg);
		i.setComments(al);
		updateItem(i);
		return "Sent";
	}

	public String addItemToTrending(long id) {
		// TODO Auto-generated method stub
		Items i=ir.findById(id).get();
		i.setTrending(true);
		ir.save(i);
		return "Added to Trending";
	}

	public String removeItemFromTrending(long id) {
		// TODO Auto-generated method stub
		Items i=ir.findById(id).get();
		i.setTrending(false);
		ir.save(i);
		return "Remove from Trending";
	}

//	public List<Items> findByName(String name) {
//		// TODO Auto-generated method stub
//		return ir.findByName(name);
////		return null;
//	}
}
