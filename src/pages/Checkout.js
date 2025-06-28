
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ MUST HAVE
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import axios from "axios";

function Checkout() {
   const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentType, setPaymentType] = useState("");

  function place_order(event) {
    event.preventDefault();

    const obj = {
      area,
      city,
      district,
      state,
      country,
      pincode,
      payment_type: paymentType, // ✅ correct key name
      token: localStorage.getItem("user_token"),
    };

    console.log("Sending to server:", obj);

    axios
      .post("https://a2zithub.org/dairy/abi/place_order", obj)
      .then((res) => {
        // console.log("Order Placed", res.data);
navigate("/order_list");  // हे बरोबर आहे (l छोटं)

        alert("Order placed successfully!");
      })
      .catch((err) => {
        console.error("Error:", err.response?.data || err.message);
        alert("Order failed. Please try again.");
      });
  }

  return (
    <>
      <Navbar />
      <br />
      <h1 className="text-center">Secure Checkout</h1>
      <div className="container mt-5">
        <h2 className="mb-4">Checkout</h2>
        <form onSubmit={place_order}>
          <div className="mb-3">
            <label className="form-label">Area</label>
            <input
              type="text"
              className="form-control"
              name="area"
              required
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">District</label>
            <input
              type="text"
              className="form-control"
              name="district"
              required
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              required
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input
              type="number"
              className="form-control"
              name="pincode"
              required
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="payment_type" className="form-label">
              Payment Type
            </label>
            <select
              className="form-select"
              id="payment_type"
              name="payment_type"
              required
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="" disabled>
                Select Payment Type
              </option>
              <option value="cod">Cash on Delivery</option>
              <option value="online">Online Payment</option>
              <option value="upi">UPI</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>
          <center>
            <button type="submit" className="btn btn-success">
              Place Order
            </button>
          </center>
        </form>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Checkout; // ✅ Top-level, outside all brackets
