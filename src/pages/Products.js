import  Footer  from "./Common/Footer";
import ProductCard from "./Common/ProductCart";
import  Navbar  from "./Common/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


function Product(){

    const [products,setProducts] = useState([]);

    useEffect (() =>{
        axios.get("https://a2zithub.org/dairy/abi/product_det").then((res) =>{
            console.log("response",res.data);
            setProducts(res.data);
        })
    },[])
    return(<>
    <Navbar/>
    <br/><br/>
    <h1 className="text-center">Welcome to Product</h1>
    <br/>
    <div className="container">
        <div className="row">
            {products.map((val,index) =>(
                 <ProductCard data={val} />
   
            )) }
        </div>
    </div>
    <br/><br/>

  
    
    <Footer/>
    </>)
}


export default Product ;