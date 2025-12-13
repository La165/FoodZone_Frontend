// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchOrderById } from "./Store";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const { orderId } = useParams();
//   const dispatch = useDispatch();
//   const { selectedOrder, loading, error } = useSelector(
//     (state) => state.getOrders
//   );

//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     dispatch(fetchOrderById(orderId));
//   }, [dispatch, orderId]);

//   const copyOrderId = () => {
//     navigator.clipboard.writeText(orderId);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   if (loading || !selectedOrder) {
//     return <p>Loading order details...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   const order = selectedOrder;

//   return (
//     <div className="order-details-page">
//       <h2>Order Details</h2>

//       <div className="order-id-box">
//         <p>
//           <strong>Order ID:</strong> #{order._id}
//         </p>
//         <button onClick={copyOrderId}>{copied ? "Copied!" : "Copy"}</button>
//       </div>

//       <div className="items-section">
//         <h4>Items Ordered</h4>
//         {order.items.map((item, index) => (
//           <div key={index} className="item-row">
//             <img src={item.image} alt={item.name} />
//             <span>{item.name}</span>
//             <span>
//               {item.quantity} × ₹{item.price}
//             </span>
//             <span>Subtotal: ₹{item.subtotal}</span>
//           </div>
//         ))}
//       </div>

//       <div className="bill-summary-card">
//         <h4>Bill Summary</h4>
//         <p>Subtotal: ₹{order.totalMRP}</p>
//         <p>Discount: -₹{order.discountAmount}</p>
//         <p>Coupon Discount: -₹{order.couponDiscount}</p>
//         <p>GST: ₹{order.gstAmount}</p>
//         <p>Delivery Charges: ₹{order.deliveryCharges}</p>
//         <hr />
//         <p>
//           <strong>Total Paid: ₹{order.finalPayableAmount}</strong>
//         </p>
//       </div>

//       <div className="delivery-section">
//         <p>
//           <strong>Delivery Address:</strong> {order.deliveryAddress}
//         </p>
//         <p>
//           <strong>Payment Method:</strong> {order.paymentMethod}
//         </p>
//         <p>
//           <strong>Status:</strong> {order.status}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderById } from "./Store";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { selectedOrder, loading, error } = useSelector(
    (state) => state.getOrders
  );

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch, orderId]);

  const copyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (loading || !selectedOrder) return <p>Loading order details...</p>;
  if (error) return <p>{error}</p>;

  const order = selectedOrder;

  return (
    <div className="order-details-page">
      <h2>Order Details</h2>

      <div className="order-id-box">
        <span>
          <strong>Order ID:</strong> #{order._id}
        </span>
        <button onClick={copyOrderId}>{copied ? "Copied!" : "Copy"}</button>
      </div>

      {/* Items Ordered */}
      <div className="items-section">
        <h4>Items Ordered</h4>
        {order.items.map((item, index) => (
          <div key={index} className="item-row">
            <img
              src={item.image}
              alt={item.name}
              className="order-item-image"
            />
            <span className="item-name">{item.name}</span>
            <span>
              {item.quantity} × ₹{item.price}
            </span>
            <span>Subtotal: ₹{item.subtotal}</span>
          </div>
        ))}
      </div>

      {/* Bill Summary */}
      <div className="bill-summary-card">
        <h4>Bill Summary</h4>
        <p>Subtotal: ₹{order.totalMRP}</p>
        <p>Discount: -₹{order.discountAmount}</p>
        <p>Coupon Discount: -₹{order.couponDiscount}</p>
        <p>GST: ₹{order.gstAmount}</p>
        <p>Delivery Charges: ₹{order.deliveryCharges}</p>
        <hr />
        <p className="total-amount">
          <strong>Total Paid: ₹{order.finalPayableAmount}</strong>
        </p>
      </div>

      {/* Delivery Details */}
      <div className="delivery-section">
        <h4>Delivery Details</h4>
        <p>
          <strong>Address:</strong> {order.deliveryAddress}
        </p>
        <p>
          <strong>Payment Method:</strong> {order.paymentMethod}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`status ${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
