



// import React, { useState, useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, decreaseQuantity, removeFromCart } from "./Store";
// import CouponApply from "./CouponApply";
// import { useNavigate } from "react-router-dom";
// import { QRCodeCanvas } from "qrcode.react";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import axiosInstance from "./axiosInstance";
// import SendOrderEmail from "./SendOrderEmail";

// function Cart() {
//   const cartItems = useSelector((state) => state.cart);
//   const { discount = 0, applied = false, code = "", message = "" } =
//     useSelector((state) => state.coupon) || {};
// const { user } = useSelector((state) => state.login);


//   const [customerEmail, setCustomerEmail] = useState("");
//   const [discountPercentage, setDiscountPercentage] = useState(0);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   // ===== LOGIN REQUIRED HANDLER =====
//   const requireLogin = () => {
//     Swal.fire({
//       icon: "warning",
//       title: "You must login to continue!",
//       showCancelButton: true,
//       confirmButtonText: "Go to Login",
//     }).then((res) => {
//       if (res.isConfirmed) navigate("/login");
//     });
//   };

//   // ===== PRICE CALCULATIONS =====
//   const calculations = useMemo(() => {
//     const totalPrice = cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     const customDiscountAmount = totalPrice * (discountPercentage / 100);
//     const priceAfterCustomDiscount = totalPrice - customDiscountAmount;
//     const couponDiscountAmount = priceAfterCustomDiscount * (discount / 100);
//     const gstAmount = priceAfterCustomDiscount * 0.18;
//     const netAmount =
//       priceAfterCustomDiscount + gstAmount - couponDiscountAmount;

//     return {
//       totalPrice,
//       customDiscountAmount,
//       couponDiscountAmount,
//       gstAmount,
//       netAmount,
//     };
//   }, [cartItems, discountPercentage, discount]);

//   const {
//     totalPrice,
//     customDiscountAmount,
//     couponDiscountAmount,
//     gstAmount,
//     netAmount,
//   } = calculations;

//   const upiId = "7675087614@ibl";
//   const payerName = "Lalitha's FoodZone";
//   const upiLink = `upi://pay?pa=${upiId}&pn=${payerName}&am=${netAmount}&cu=INR`;

//   const [showQR, setShowQR] = useState(false);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">🛒 Shopping Cart</h2>

//       <div className="row">
//         {/* LEFT SIDE — CART ITEMS */}
//         <div className="col-md-8">
//           {cartItems.length === 0 ? (
//             <h4 className="text-center text-secondary">Your cart is empty</h4>
//           ) : (
//             <>
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="card shadow-sm p-3 mb-3 d-flex flex-row align-items-center"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="rounded"
//                     style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                   />

//                   <div className="ms-3 flex-grow-1">
//                     <h5>{item.name}</h5>
//                     <p className="text-muted">₹{item.price}</p>

//                     <div className="d-flex align-items-center">
//                       <button
//                         className="btn btn-outline-primary btn-sm"
//                         onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
//                       >
//                         -
//                       </button>

//                       <span className="mx-2 fw-bold">{item.quantity}</span>

//                       <button
//                         className="btn btn-outline-primary btn-sm"
//                         onClick={() => {
//                           if (!token) return requireLogin(); // Only require login for adding to cart
//                           dispatch(addToCart(item));
//                         }}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     className="btn btn-danger btn-sm ms-3"
//                     onClick={() => {
//                       if (!token) return requireLogin(); // Only allow removing if logged in
//                       dispatch(removeFromCart({ id: item.id }));
//                     }}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </>
//           )}
//         </div>

//         {/* RIGHT SIDE — SUMMARY */}
//         <div className="col-md-4">
//           <div className="card shadow-lg p-3 sticky-top" style={{ top: "90px" }}>
//             <h4 className="text-center">Order Summary</h4>
//             <hr />

//             <CouponApply />
//             <p className="mt-2 fw-bold">
//               {message && (applied ? "✔ " : "✖ ")} {message}{" "}
//               {code && `(Code: ${code})`}
//             </p>

//             {/* EXTRA DISCOUNT */}
//             <h5 className="mt-3">Extra Discount</h5>
//             <div>
//               {[10, 20, 30].map((d) => (
//                 <button
//                   key={d}
//                   className="btn btn-warning btn-sm m-1"
//                   onClick={() => {
//                     if (!token) return requireLogin(); // Only logged-in users
//                     setDiscountPercentage(d);
//                     toast.success(`${d}% discount applied`);
//                   }}
//                 >
//                   {d}%
//                 </button>
//               ))}
//             </div>

//             <hr />

//             {/* PRICES */}
//             <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
//             {discountPercentage > 0 && (
//               <>
//                 <p>Extra Discount: {discountPercentage}%</p>
//                 <p>− ₹{customDiscountAmount.toFixed(2)}</p>
//               </>
//             )}
//             {applied && <p>Coupon Discount: − ₹{couponDiscountAmount.toFixed(2)}</p>}
//             <p>GST (18%): ₹{gstAmount.toFixed(2)}</p>
//             <h3 className="text-success">Final Amount: ₹{netAmount.toFixed(2)}</h3>

//             {/* EMAIL FIELD */}
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={customerEmail}
//               onChange={(e) => setCustomerEmail(e.target.value)}
//               className="form-control mt-3"
//             />

//             {/* SEND EMAIL BUTTON */}
//             <SendOrderEmail
//               cartItems={cartItems}
//               totalAmount={totalPrice}
//               customDiscountAmount={customDiscountAmount}
//               couponDiscountAmount={couponDiscountAmount}
//               gstAmount={gstAmount}
//               netAmount={netAmount}
//               customerEmail={customerEmail}
//             />

//             {/* QR PAYMENT */}
//             <button
//               className="btn btn-primary w-100 mt-3"
//               onClick={() => {
//                 if (!token) return requireLogin();
//                 setShowQR(true);
//               }}
//             >
//               Show QR to Pay
//             </button>

//             {showQR && (
//               <div className="text-center mt-3">
//                 <QRCodeCanvas value={upiLink} size={200} />
//                 <p className="mt-2">Scan & Pay</p>
//               </div>
//             )}

//             {/* CHECKOUT */}
//             <button
//               className="btn btn-success w-100 mt-3"
//               onClick={() => {
//                     if (!token) {
//       Swal.fire({
//         icon: "warning",
//         title: "You must login to place an order!",
//         showCancelButton: true,
//         confirmButtonText: "Go to Login",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate("/login"); // redirect to login page
//         }
//       });
//       return; // stop execution
//     }


//                 const orderData = {
//                   userId: user.id, 
//   items: cartItems.map(({ id, name, price, quantity }) => ({
//     id,
//     name,
//     price,
//     quantity,
//   })),
//   totalMRP: totalPrice,
//   discountAmount: customDiscountAmount,
//   couponDiscount: couponDiscountAmount,
//   gstAmount: gstAmount,
//   deliveryCharges: 0, // if you don’t use it, set 0
//   finalPayableAmount: netAmount,
//   paymentMethod: "UPI",
//   deliveryAddress: "N/A", // you can later replace with real address
// };


//                 axiosInstance
//                   .post("/saveOrders", orderData)
//                   .then(() => {
//                     Swal.fire({
//                       icon: "success",
//                       title: "Order Placed Successfully!",
//                     }).then(() => navigate("/orders"));
//                   })
                  
//                   .catch((err) => {
//                     Swal.fire({
//                       icon: "error",
//                       title: "Order failed",
//                       text: err.response?.data?.message || "Something went wrong",
//                     });
//                   });
//               }}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;



import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "./Store";
import CouponApply from "./CouponApply";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axiosInstance from "./axiosInstance";
import SendOrderEmail from "./SendOrderEmail";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const { discount = 0, applied = false, code = "", message = "" } =
    useSelector((state) => state.coupon) || {};

  const { user } = useSelector((state) => state.login);

  const [customerEmail, setCustomerEmail] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showQR, setShowQR] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // ========== LOGIN CHECK ==========
  const requireLogin = () => {
    Swal.fire({
      icon: "warning",
      title: "You must login to continue!",
      showCancelButton: true,
      confirmButtonText: "Go to Login",
    }).then((res) => {
      if (res.isConfirmed) navigate("/login");
    });
  };

  // ========== PRICE CALCULATIONS ==========
  const calculations = useMemo(() => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const customDiscountAmount = totalPrice * (discountPercentage / 100);
    const priceAfterCustomDiscount = totalPrice - customDiscountAmount;

    const couponDiscountAmount = priceAfterCustomDiscount * (discount / 100);
    const gstAmount = priceAfterCustomDiscount * 0.18;

    const netAmount =
      priceAfterCustomDiscount + gstAmount - couponDiscountAmount;

    return {
      totalPrice,
      customDiscountAmount,
      couponDiscountAmount,
      gstAmount,
      netAmount,
    };
  }, [cartItems, discountPercentage, discount]);

  const { totalPrice, customDiscountAmount, couponDiscountAmount, gstAmount, netAmount } =
    calculations;

  // UPI LINK
  const upiId = "7675087614@ibl";
  const payerName = "Lalitha's FoodZone";
  const upiLink = `upi://pay?pa=${upiId}&pn=${payerName}&am=${netAmount}&cu=INR`;

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4 fw-bold">🛒 Your Shopping Cart</h2>

      <div className="row g-4">
        {/* LEFT SIDE – CART ITEMS */}
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <div className="text-center p-5 shadow-sm bg-light rounded">
              <h4 className="text-secondary">Your cart is empty</h4>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="card border-0 shadow-sm mb-3 p-3 d-flex flex-row align-items-center rounded-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-3"
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                  }}
                />

                <div className="ms-3 flex-grow-1">
                  <h5 className="fw-semibold">{item.name}</h5>
                  <p className="text-muted mb-1">₹{item.price}</p>

                  <div className="d-flex align-items-center mt-2">
                    <button
                      className="btn btn-outline-dark btn-sm rounded-circle"
                      onClick={() =>
                        dispatch(decreaseQuantity({ id: item.id }))
                      }
                    >
                      −
                    </button>

                    <span className="mx-3 fw-bold">{item.quantity}</span>

                    <button
                      className="btn btn-outline-dark btn-sm rounded-circle"
                      onClick={() => {
                        if (!token) return requireLogin();
                        dispatch(addToCart(item));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="btn btn-danger btn-sm px-3 rounded-3"
                  onClick={() => {
                    if (!token) return requireLogin();
                    dispatch(removeFromCart({ id: item.id }));
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE – SUMMARY */}
        <div className="col-md-4">
          <div
            className="card shadow-lg p-4 rounded-4 sticky-top"
            style={{ top: "90px" }}
          >
            <h4 className="text-center fw-bold mb-3">Order Summary</h4>
            <hr />

            <CouponApply />

            <p className="mt-2 fw-semibold">
              {message && (applied ? "✔" : "✖")} {message}
              {code && ` (Code: ${code})`}
            </p>

            {/* EXTRA DISCOUNT */}
            <h5 className="fw-semibold mt-3">Extra Discount</h5>

            <div className="d-flex gap-2">
              {[10, 20, 30].map((d) => (
                <button
                  key={d}
                  className="btn btn-warning btn-sm rounded-3 fw-bold"
                  onClick={() => {
                    if (!token) return requireLogin();
                    setDiscountPercentage(d);
                    toast.success(`${d}% discount applied`);
                  }}
                >
                  {d}%
                </button>
              ))}
            </div>

            <hr />

            {/* PRICE DETAILS */}
            <div className="mt-2">
              <p className="d-flex justify-content-between">
                <span>Total Price:</span> <b>₹{totalPrice.toFixed(2)}</b>
              </p>

              {discountPercentage > 0 && (
                <p className="d-flex justify-content-between text-danger">
                  <span>Extra Discount:</span>{" "}
                  <b>- ₹{customDiscountAmount.toFixed(2)}</b>
                </p>
              )}

              {applied && (
                <p className="d-flex justify-content-between text-danger">
                  <span>Coupon Discount:</span>{" "}
                  <b>- ₹{couponDiscountAmount.toFixed(2)}</b>
                </p>
              )}

              <p className="d-flex justify-content-between">
                <span>GST (18%):</span> <b>₹{gstAmount.toFixed(2)}</b>
              </p>

              <h4 className="text-success d-flex justify-content-between mt-3">
                <span>Final Amount:</span>
                <b>₹{netAmount.toFixed(2)}</b>
              </h4>
            </div>

            {/* EMAIL INPUT */}
            <input
              type="email"
              placeholder="Enter your email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="form-control mt-3 rounded-3"
            />

            <SendOrderEmail
              cartItems={cartItems}
              totalAmount={totalPrice}
              customDiscountAmount={customDiscountAmount}
              couponDiscountAmount={couponDiscountAmount}
              gstAmount={gstAmount}
              netAmount={netAmount}
              customerEmail={customerEmail}
            />

            {/* QR PAYMENT */}
            <button
              className="btn btn-primary w-100 mt-3 rounded-3"
              onClick={() => {
                if (!token) return requireLogin();
                setShowQR(true);
              }}
            >
              Show QR to Pay
            </button>

            {showQR && (
              <div className="text-center mt-3">
                <QRCodeCanvas value={upiLink} size={200} />
                <p className="mt-2 fw-semibold">Scan & Pay</p>
              </div>
            )}

            {/* CHECKOUT */}
            <button
              className="btn btn-success w-100 mt-3 rounded-3 fw-bold"
              onClick={() => {
                if (!token) {
                  Swal.fire({
                    icon: "warning",
                    title: "You must login to place an order!",
                    showCancelButton: true,
                    confirmButtonText: "Go to Login",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/login");
                    }
                  });
                  return;
                }

                const orderData = {
                  userId: user.id,
                  items: cartItems.map(
                    ({ id, name, price, quantity,image }) => ({
                      id,
                      name,
                      price,
                      quantity,
                      image
                    })
                  ),
                  totalMRP: totalPrice,
                  discountAmount: customDiscountAmount,
                  couponDiscount: couponDiscountAmount,
                  gstAmount: gstAmount,
                  deliveryCharges: 0,
                  finalPayableAmount: netAmount,
                  paymentMethod: "UPI",
                  deliveryAddress: "N/A",
                };

                axiosInstance
                  .post("/saveOrders", orderData)
                  .then(() => {
                    Swal.fire({
                      icon: "success",
                      title: "Order Placed Successfully!",
                    }).then(() => navigate("/orders"));
                  })
                  .catch((err) => {
                    Swal.fire({
                      icon: "error",
                      title: "Order failed",
                      text:
                        err.response?.data?.message ||
                        "Something went wrong",
                    });
                  });
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
