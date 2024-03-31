package devsShop.Services;

import java.util.List;

import devsShop.Entity.Users;

public interface UsersServiceInterface {
	String addUser(Users u);
	String updateUser(Users u);
	List<Users> getAllUser();
	String deleteUser(long uid);
	String userLogin(Users u);
	List<Users> getSearchUser(Users u);
	Users getUser(String email);
	String updatePassword(Users u);
}
