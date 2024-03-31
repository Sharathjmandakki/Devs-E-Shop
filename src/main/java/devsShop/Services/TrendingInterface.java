package devsShop.Services;

import java.util.List;

import devsShop.Entity.Trendings;

public interface TrendingInterface {
	public String add(Trendings t);
	public String remove(Trendings t);
	List<Trendings> viewAll();
	List<Trendings> viewTrend(Trendings t);
}
