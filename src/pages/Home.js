import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./Common/ProductCart";

function Home() {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios.get("https://a2zithub.org/dairy/abi/Slider_det").then((res) => {
      setSliders(res.data);
    });
  }, []);


// useEffect(() => {
//   axios.get("https://a2zithub.org/dairy/abi/product_cat_details").then((res) => {
//     setProducts(res.data);
//   });
// }, []);


  return (
    <>
      <Navbar />

      {/* Carousel Start */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {sliders?.map((val, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={val.slider_img}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {sliders?.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container">
        <section className="py-1 bg-light">
          <h2 className="mb-4 text-center">Featured Products</h2>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
 
          </div>
        </section>
      </div>



      {/* New Arrivals Section */}
      <div className="container">
        <section className="py-1 bg-light">
          <h2 className="mb-4 text-center">New Arrivals</h2>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;