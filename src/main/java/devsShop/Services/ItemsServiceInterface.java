package devsShop.Services;

import java.util.List;

import devsShop.Entity.Items;

public interface ItemsServiceInterface {
	String addItem(Items i);
	String updateItem(Items i);
	List<Items> viewAllItems();
	List<Items> Search(String name);
	String deleteItem(long id);
}
