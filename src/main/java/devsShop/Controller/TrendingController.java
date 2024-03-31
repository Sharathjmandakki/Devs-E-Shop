package devsShop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import devsShop.Entity.Trendings;
import devsShop.Services.TrendingServices;
@CrossOrigin("*")
@RestController
public class TrendingController {
	@Autowired
	TrendingServices ts;
	
	@PostMapping("addcategorytotrending")
	public String addToTrending(@RequestBody Trendings t) {
		return ts.add(t);
	}
	@PostMapping("removecategoryfromtrending")
	public String removeFromTrending(@RequestBody Trendings t) {
		return ts.remove(t);
	}
	@GetMapping("trendingcat")
	public List<Trendings> viewAll(){
		return ts.viewAll();
	}
	@PostMapping("viewtrendingcat")
	public List<Trendings> viewTrendingcat(@RequestBody Trendings t) {
		return ts.viewTrend(t);
	}
	
}
