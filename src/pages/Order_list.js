import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Order_list() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const obj = { token: localStorage.getItem("user_token") };
    axios
      .post("https://a2zithub.org/dairy/abi/order_list", obj)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.order_det);
      });
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <h1 className="text-center">Order List</h1>
      <br />
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Payment Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.product_order_id}</td>
                <td>{order.entry_date}</td>
                <td>₹{order.ttl_amount}</td>
                <td>{order.city}</td>
                <td>{order.pincode}</td>
                <td>{order.payment_type}</td>
                <td>
                  <Link to={"/order_details/" + order.product_order_id}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Order_list;
