import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderById } from "./Store";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedOrder, loading, error } = useSelector(
    (state) => state.getOrders
  );

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch, orderId]);

  if (loading || !selectedOrder) {
    return <p style={{ textAlign: "center" }}>Loading order details...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  const order = selectedOrder;

  return (
    <div className="order-details-page">

      {/* 🔙 Back Button */}
      <button className="back-btn" onClick={() => navigate("/orders")}>
        ⬅ Back to Orders
      </button>

      <h2>Order Details</h2>

      {/* Order ID */}
      <div className="order-id-box">
        <span>
          <strong>Order ID:</strong> #{order._id}
        </span>
      </div>

      {/* Items */}
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

      {/* Bill */}
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

      {/* Delivery */}
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