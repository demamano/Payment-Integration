import './App.css'; 
import axios from "axios";
import {useState} from "react";


function App() {
  const [item,setItem]=useState({
    name:"tesla model 00",
    supplier : "dema amano",
    img : "https://ocdn.eu/pulscms-transforms/1/RcEk9kuTURBXy…mVmNi0wNzQxNTU2NTNiNGQuanBlZ5GTBc0DFs0Brt4AAaEwBQ",
    amount : 450,

  });
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [createUrl , setCreateUrl] = useState("");

  const handlePayment = async () => {
    const response = await axios.post("http://localhost:4400/api/payment/initialize/orders", {
      key:"CHAPUBK_TEST-t6lPQ1cMOwQGSn1Pf0sk5Voi4pbUBSUF",
      amount:item.amount,
      currency: "ETB",
      email: "ketemagirma@gmail.com",
      first_name: "ketema",
      last_name: "Girma",
      phone_number: "0912345678",
      tx_ref: "chewatatest-66665",
      // callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      callback_url: "http://localhost:4400/api/payment/verify",

      // return_url: "http://localhost:3000",

    });


    setCheckoutUrl(response.data.checkoutUrl);
  };
 
  return (
    <div className="App">
      <div className="book_container">
				<img src={item.img} alt="book_img" className="book_img" />
				<p className="book_name">{item.name}</p>
				<p className="book_author">By {item.supplier}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {item.amount}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
        {checkoutUrl && <a href={checkoutUrl}>Proceed to Payment</a>}

			</div>
      {/* create subaccount  */}
      {/* <div>
      <button onClick={createsubAccount} className="buy_btn">
					create now
				</button>
        {
          createUrl && <a href={createUrl}>Proceed to Create Account</a>
        }
      </div> */}
      

    </div>
  );
}

export default App;

