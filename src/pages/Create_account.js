import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_account()
{



    const [user_name,setUserName] = useState("");
    const [user_mobile,setUserMobile] = useState("");
    const [user_email,setUserEmail] = useState("");
    const [user_password,setUserPassword] = useState("");
    const navigate = useNavigate();

    function submitForm(event)
    {
    event.preventDefault();
   

var obj = {"user_name":user_name,"user_mobile":user_mobile,"user_email":user_email,"user_password":user_password};
axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res) =>{
    console.log(res.data);
    navigate("/login");
})
    

    }

    return(
        <>
        <Navbar />
        <br/><br/>

        <div className="container">
        <div className="row justify-content-center"> 
        <div className="col-md-5">
        <h1>Create Account </h1>
        
        <form action="" method="" onSubmit={submitForm}>
            Enter Name 
            <input type="text" className="form-control" onChange={(e) =>{ setUserName(e.target.value)}} /><br/>
             Enter Mobile
            <input type="number" className="form-control" onChange={(e) =>{ setUserMobile(e.target.value)}}/><br/>
             Enter Email
            <input type="email" className="form-control" onChange={(e) =>{ setUserEmail(e.target.value)}}  /><br/>
             Enter Password
            <input type="password" className="form-control" onChange={(e) =>{ setUserPassword(e.target.value)}} /><br/>
            <button className="btn btn-primary">Create Account </button>
        </form>

        </div>
        </div>
        </div>
        <Footer  />
        
        </>
    )
}
export default Create_account;