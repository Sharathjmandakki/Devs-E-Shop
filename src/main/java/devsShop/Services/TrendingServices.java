package devsShop.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devsShop.Entity.Trendings;
import devsShop.Repository.TrendingRepository;
@Service
public class TrendingServices implements TrendingInterface {
	@Autowired
	TrendingRepository tr;
	@Override
	public String add(Trendings t) {
		// TODO Auto-generated method stub
		List<Trendings> tl=viewAll();
		boolean res= true;
		for(Trendings ts:tl) {
			if(ts.getName().equals(t.getName())) {
				res=false;
			}
		}
		if(res) {
			tr.save(t);
			return "added";
		}else {
			return "🚫 you can't. Add same Category which is already live ";
		}
	}

	@Override
	public String remove(Trendings t) {
		// TODO Auto-generated method stub
		tr.deleteById(t.getId());
		return "removed";
	}

	@Override
	public List<Trendings> viewAll() {
		// TODO Auto-generated method stub
		return tr.findAll();
	}
	@Override
	public List<Trendings> viewTrend(Trendings t) {
		// TODO Auto-generated method stub
		List<Trendings> ts=tr.findByName(t.getName());		
		return ts;
	}
}
