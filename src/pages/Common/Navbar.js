import { Link } from "react-router-dom";

function Navbar()
{

  
    return(
        <>
        {/* <h1>Navbar Open</h1> */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">MyWebsite</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cart</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          {/* Right-side Icons */}
           <div className="d-flex align-items-center">

         
<div className={localStorage.getItem('user_token') == undefined ? "d-block" : "d-none"}>
  <Link to={"/login"} className="text-white me-3 position-relative">Login</Link>
  <Link to={"/create_account"} className="text-white me-3 position-relative">Sign Up</Link>
</div>

<div className={localStorage.getItem('user_token') == undefined ? "d-none" : "d-block"}>
  <Link to={"/cart"} className="text-white me-3 position-relative">Cart</Link>
  <Link to={"/profile"} className="text-white me-3 position-relative">Profile</Link>
</div>
</div>
        </ul>
      </div>
    </div>
  </nav>
        
        
        </>
    )
}
export default Navbar;