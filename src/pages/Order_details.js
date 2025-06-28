import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import React, { useState, useEffect } from "react";

function Order_details() {
  const { order_id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("user_token");

    axios.post("https://a2zithub.org/dairy/abi/order_det", {
      token: token,
      order_id: order_id,
    }).then((res) => {
      console.log("API RESPONSE:", res.data);

    
      if (res.data && res.data.order_det) {
        const data = Array.isArray(res.data.order_det)
          ? res.data.order_det[0]
          : res.data.order_det;

        setOrder(data);
      } else {
        alert("Order not found.");
      }
      setLoading(false);
    });
  }, [order_id]);

  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <h2 className="text-center">Order Details for Order ID: {order_id}</h2>
        <hr />

        {loading ? (
          <p>Loading order details...</p>
        ) : order ? (
          <div className="card p-4 shadow">
            <p><strong>City:</strong> {order.city || "N/A"}</p>
            <p><strong>Pincode:</strong> {order.pincode || "N/A"}</p>
            <p><strong>Amount:</strong> ₹{order.ttl_amount || "N/A"}</p>
            <p><strong>Payment Type:</strong> {order.payment_type || "N/A"}</p>
            <p><strong>Entry Date:</strong> {order.entry_date || "N/A"}</p>
          </div>
        ) : (
          <p>No order details found.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Order_details;
