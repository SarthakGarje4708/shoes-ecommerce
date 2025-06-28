import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Cart() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    const obj = { token: localStorage.getItem("user_token") };
    axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  // ➖ Decrease Qty
  function decreaseQty(product_econ_cart_id) {
    const obj = {
      product_econ_cart_id,
      token: localStorage.getItem("user_token"),
    };
    axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then((res) => {
      getProducts();
    });
  }

  // ➕ Increase Qty
  function increaseQty(product_econ_cart_id) {
    const obj = {
      product_econ_cart_id,
      token: localStorage.getItem("user_token"),
    };
    axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then((res) => {
      getProducts();
    });
  }

  return (
    <>
      <Navbar />
      <br /><br />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="text-center">Your Cart</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((val, index) => (
                  <tr key={index}>
                    <td><img src={val.product_img} width="100px" alt="product" /></td>
                    <td>{val.product_name}</td>
                    <td>&#8377; {val.price}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger me-2"
                        onClick={() => decreaseQty(val.product_econ_cart_id)}
                      >➖</button>
                      {val.qty}
                      <button
                        className="btn btn-sm btn-outline-success ms-2"
                        onClick={() => increaseQty(val.product_econ_cart_id)}
                      >➕</button>
                    </td>
                    <td>&#8377; {val.qty * val.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => decreaseQty(val.product_econ_cart_id)}
                      >
                        &#10005;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center">
              <Link to ="/Checkout">
              <button className="btn btn-primary btn-lg">Proceed to Buy</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br /><br />
      <Footer />
      <br /><br />
    </>
  );
}

export default Cart;
