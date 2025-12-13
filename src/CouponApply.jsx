import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "./Store";

function CouponApply() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />

      <button onClick={() => dispatch(applyCoupon(input.toLowerCase()))}>
        Apply Coupon
      </button>
    </>
  );
}

export default CouponApply;
