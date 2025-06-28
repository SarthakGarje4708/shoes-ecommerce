import { Link } from "react-router-dom";
function ProductCard(props) {
  const { data, price } = props;

  if (!data) {
    return null; 
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
        <div className="card-img-top-container overflow-hidden position-relative">
          {data.product_img ? (
            <img
              src={data.product_img}
              className="card-img-top p-3"
            />
          ) : (
            <div className="p-3 text-center text-muted">No Image</div>
          )}
          <div className="badge bg-success position-absolute top-0 end-0 m-2">New</div>
        </div>

        <div className="card-body pt-0">
          <h6 className="card-title fw-semibold mb-1">{data.product_name}</h6>
          <p className="card-text text-muted small mb-2">
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-primary mb-0">₹{data.price}</h6>
            <Link to ={"/product_det/" +props.data.product_tbl_id}>
            <button className="btn btn-outline-primary btn-sm rounded-pill px-3">
              Add to Cart
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;