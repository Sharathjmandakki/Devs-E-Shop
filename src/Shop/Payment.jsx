import axios from "axios";
import Cart from "../User/Cart";

//TODO 
const payment=async()=>{
    try{
        const u=await axios.get("http://localhost:9090/user")
        const response=await axios.post("http://localhost:9090/payment",{
            name:u.data.name,
            email:u.data.email,
            cart:u.data.cart,
        })
        Payment(u.data,response.data.id)
    }catch(e){
        alert(e)
    }
}
function Payment(u,order) {    
    var options = {
            key: "rzp_test_pp9YPJEHeouiL9",
            key_secret:"9McTy8XzpLyjcGtuDcaIf685", // Enter the Key ID generated from the Dashboard
            amount: 50000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: u.name,
            description:"Devs Shop E-cart",
            image:"https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg",
            order_id:order , //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response){
                const paymentId=(response.razorpay_payment_id);
                const orderId=(response.razorpay_order_id);
                const signature=(response.razorpay_signature);
                
                console.log(orderId+" "+paymentId+" "+signature);
                const data = {
                    orderId:orderId,
                    paymentId:paymentId,
                    signature:signature,
                  };
                const f= await axios.post("http://localhost:9090/verify",{data})
                console.log(f);
                if(f.data===true){
                    Order(u)
                }else{
                    alert("failed amount will be resend in 2-3 working days")
                }
            },
            prefill: {
                name: u.name,
                email: u.email,
                contact: "9000090000"
            },
            notes: {
                "address": u.address,
            },
            theme: {
                "color": "#670f7f"
            }
        };
        try{
        var rzp1 = new window.Razorpay(options);
        }catch{
          alert("you already exeded or exeding your limit (50,000)")
        }
        // rzp1.on('payment.failed', function (response){
        //         alert("you already exeded or exeding your limit (50,000)")
        // });
        document.getElementById('rzp-button1').onclick = function(e){
            rzp1.open();
            e.preventDefault();
        } 
}

const Order = async (user) => {
    console.log(user.cart);
    console.log(user);
    try {
      const res = await axios.post("http://localhost:9090/createOrder", {
        items:user.cart,
        id:0,
        paid:true,
      })
      console.log(res);
      if(res.data==="Created"){
        const response = await axios.post("http://localhost:9090/buyallcart", {
          name:user.username,
          email:user.email,
        })
        alert(response.data)
        if(response.data==="added"){
          window.location.href="myorders"
        }
      }
      
    } catch (e) {
      alert("error in buying")
    }
  }

export default payment;