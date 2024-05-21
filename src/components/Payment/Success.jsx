import { useUserContext } from "../../Context/UserContext";
import "./Success.css";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helper/FormatPrice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
const Success = () => {

  const { clearCartItems } = useUserContext();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const totalAmount = query.get('q');
    setTotalPrice(totalAmount);
    clearCartItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="success-page">
          <img src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="success" />
          <h2>Payment Successful!</h2>
          <p>Thank you! Your payment of <FormatPrice price={totalPrice} /> has been received.</p>
          <NavLink to="/">
            <button className="btn">
              Back to Home
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Success