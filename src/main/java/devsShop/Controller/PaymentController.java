package devsShop.Controller;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;

import devsShop.Entity.Items;
import devsShop.Entity.Users;
@CrossOrigin("*")
@RestController
public class PaymentController {
	@PostMapping("payment")
	public String createOrder(@RequestBody Users u) {
		long amount=0;
		for(Items i:u.getCart()) {
			amount+=i.getCost();
		}
		Order order=null;
		try {
			RazorpayClient razorpay = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
			JSONObject orderRequest = new JSONObject();
			orderRequest.put("amount", amount*100);
			orderRequest.put("currency", "INR");
			orderRequest.put("receipt", u.getName());
			JSONObject notes = new JSONObject();
			for(Items i:u.getCart()) {
				notes.put("note", i.getName());
			}
			orderRequest.put("notes", notes);
			order = razorpay.orders.create(orderRequest);
		} catch (Exception e) {
			// TODO: handle exception
			System.err.println("payement failed");
		}
		return order.toString();
	}
	
	@PostMapping("/verify")
	@ResponseBody
	public boolean verifyPayment(@RequestBody data d) {
	    try {
	        RazorpayClient razorpayClient = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
	        JSONObject options = new JSONObject();
	        options.put("razorpay_order_id", d.getOrderId()+"");
	        options.put("razorpay_payment_id", d.getPaymentId()+"");
	        options.put("razorpay_signature",d.getSignature()+"");
	        boolean isValidSignature =Utils.verifyPaymentSignature(options,"9McTy8XzpLyjcGtuDcaIf685");
	        return !isValidSignature;
	    } catch (RazorpayException e) {
	        e.printStackTrace();
	        System.out.println("not paid");
	        return false;
	    }
	}
}

class data{
	private String orderId;
	private String signature;
	private String paymentId;
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
}
//TODO: payment configuration with razor pay to by product and to orders

//TODO: react Home Page Images lap,phone,char,printer so on
