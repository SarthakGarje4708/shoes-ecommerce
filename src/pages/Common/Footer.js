 function Footer() {
  return (
    <>
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We provide quality products at affordable prices. Your satisfaction is our priority.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: Ahmednagar, Maharashtra</p>
          </div>
        </div>
        <div className="text-center mt-4 py-3 border-top border-secondary">
          <p className="mb-0">© 2025 MyShop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Footer;