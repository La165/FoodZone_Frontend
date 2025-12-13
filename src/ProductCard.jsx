import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store";
import { toast } from "react-toastify";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card product-card">
      <img
        src={item.image}
        alt={item.name}
        className="product-img card-img-top"
      />

      <div className="card-body d-flex flex-column text-center">
        <h5 className="product-title">{item.name}</h5>
        <p className="product-desc">{item.desc || item.des}</p>

        <h6 className="product-price">₹ {item.price}</h6>

        <button
          className="btn btn-success add-btn"
          onClick={() => {
            dispatch(addToCart(item));
            toast.success(`${item.name} added to cart`);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
