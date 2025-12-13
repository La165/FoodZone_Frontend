// // // import React, { useEffect } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { fetchOrders } from "./Store";
// // // import "./Orders.css";

// // // const Orders = () => {
// // //   const dispatch = useDispatch();

// // //   const { getOrderedItems, loading, error } = useSelector(
// // //     (state) => state.getOrders
// // //   );

// // //   useEffect(() => {
// // //     dispatch(fetchOrders());
// // //   }, [dispatch]);

// // //   return (
// // //     <div className="orders-page">
// // //       <div className="orders-container">
// // //         <h2 className="orders-heading">🛒 Your Orders</h2>

// // //         {/* Loading */}
// // //         {loading && <p className="orders-loading">Fetching your orders...</p>}

// // //         {/* Error */}
// // //         {error && <p className="orders-error">Error: {error}</p>}

// // //         {/* No Orders */}
// // //         {!loading && getOrderedItems.length === 0 && (
// // //           <p className="orders-empty">You have not placed any orders yet.</p>
// // //         )}

// // //         {/* Orders List */}
// // //         {getOrderedItems.length > 0 &&
// // //           getOrderedItems.map((order) => (
// // //             <div key={order._id} className="order-card">
// // //               <div className="order-header">
// // //                 <span className="order-id">Order #{order._id}</span>
// // //                 <span className="order-amount">₹{order.totalAmount}</span>
// // //               </div>

// // //               <h4 className="order-subheading">Items Ordered:</h4>

// // //               <ul className="order-item-list">
// // //                 {order.items?.map((item, index) => (
// // //                   <li key={index} className="order-item">
// // //                     <span>{item.name}</span>
// // //                     <span>
// // //                       ₹{item.price} × {item.quantity}
// // //                     </span>
// // //                   </li>
// // //                 ))}
// // //               </ul>

// // //               <p className="order-date">
// // //                 Placed On: {new Date(order.orderDate).toLocaleString()}
// // //               </p>
// // //             </div>
// // //           ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Orders;

// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchOrders } from "./Store";
// // import { useNavigate } from "react-router-dom";
// // import "./Orders.css";

// // const Orders = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const { getOrderedItems, loading, error } = useSelector(
// //     (state) => state.getOrders
// //   );

// //   useEffect(() => {
// //     dispatch(fetchOrders());
// //   }, [dispatch]);

// //   const openOrderDetails = (id) => {
// //     navigate(`/order/${id}`);
// //   };

// //   return (
// //     <div className="orders-page">
// //       <div className="orders-container">
// //         <h2 className="orders-heading">Your Orders</h2>

// //         {/* Loading */}
// //         {loading && <p className="orders-loading">Fetching your orders...</p>}

// //         {/* Error */}
// //         {error && <p className="orders-error">Error: {error}</p>}

// //         {/* No Orders */}
// //         {!loading && getOrderedItems.length === 0 && (
// //           <p className="orders-empty">You have not placed any orders yet.</p>
// //         )}

// //         {/* Orders List */}
// //         {getOrderedItems.length > 0 &&
// //           getOrderedItems.map((order) => (
// //             <div key={order._id} className="order-card">

// //               {/* Restaurant Header */}
// //               <div className="order-top-section">
// //                 <img
// //                   src={order.items[0]?.image}
// //                   alt="food"
// //                   className="order-food-img"
// //                 />

// //                 <div className="order-title">
// //                   <h3>{order.items[0]?.name.slice(0, 25)}...</h3>
// //                   <p className="order-address">{order.deliveryAddress}</p>
// //                   <p className="order-view-menu">View menu →</p>
// //                 </div>

// //                 <div className="order-more">⋮</div>
// //               </div>

// //               {/* Items */}
// //               <div className="order-items-box">
// //                 {order.items.map((item, index) => (
// //                   <p key={index} className="order-item-line">
// //                     1 × {item.name}
// //                   </p>
// //                 ))}

// //                 {/* Order Date */}
// //                 <p className="order-date">
// //                   Order placed on{" "}
// //                   {new Date(order.createdAt).toLocaleDateString("en-IN", {
// //                     day: "2-digit",
// //                     month: "short",
// //                     hour: "2-digit",
// //                     minute: "2-digit",
// //                   })}
// //                 </p>

// //                 {/* Status + Amount */}
// //                 <div className="order-bottom-row">
// //                   <span className="order-status">{order.status}</span>
// //                   <span className="order-price">₹{order.finalPayableAmount}</span>
// //                 </div>
// //               </div>

// //               {/* Footer Buttons */}
// //               <div className="order-footer">
// //                 <button
// //                   className="order-details-btn"
// //                   onClick={() => openOrderDetails(order._id)}
// //                 >
// //                   View Details →
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchOrders } from "./Store";
// import { Link } from "react-router-dom";
// import "./Orders.css";

// const Orders = () => {
//   const dispatch = useDispatch();

//   const { getOrderedItems, loading, error } = useSelector(
//     (state) => state.getOrders
//   );

//   const { user } = useSelector((state) => state.login);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchOrders());
//     }
//   }, [dispatch, user]);

//   return (
//     <div className="orders-page">
//       <div className="orders-container">
//         <h2 className="orders-heading">🛒 Your Orders</h2>

//         {loading && <p className="orders-loading">Fetching your orders...</p>}

//         {error && <p className="orders-error">Error: {error}</p>}

//         {!loading && getOrderedItems.length === 0 && (
//           <p className="orders-empty">You have not placed any orders yet.</p>
//         )}

//         {getOrderedItems.length > 0 &&
//           getOrderedItems.map((order) => (
//             <div key={order._id} className="order-card">
//               <div className="order-header">
//                 <span className="order-id">Order #{order._id}</span>
//                 <span className="order-amount">
//                   ₹{order.finalPayableAmount}
//                 </span>
//               </div>

//               <p className="order-info">
//                 <strong>Address:</strong> {order.deliveryAddress}
//               </p>
//               <p className="order-info">
//                 <strong>Payment:</strong> {order.paymentMethod}
//               </p>

//               <h4 className="order-subheading">Items Ordered:</h4>

//               <ul className="order-item-list">
//                 {order.items.map((item, index) => (
//                   <li key={index} className="order-item">
//                     <div className="item-left">
//                       <img src={item.image} alt={item.name} />
//                       <span>{item.name}</span>
//                     </div>
//                     <div className="item-right">
//                       <span>
//                         ₹{item.price} × {item.quantity}
//                       </span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="price-summary">
//                 <p>Subtotal: ₹{order.totalMRP}</p>
//                 <p>Discount: -₹{order.discountAmount}</p>
//                 <p>Coupon Discount: -₹{order.couponDiscount}</p>
//                 <p>GST: ₹{order.gstAmount}</p>
//                 <p>Delivery Charges: ₹{order.deliveryCharges}</p>
//                 <hr />
//                 <p className="total">
//                   <strong>Total: ₹{order.finalPayableAmount}</strong>
//                 </p>
//               </div>

//               <Link to={`/order/${order._id}`} className="view-details-btn">
//                 View Order Details
//               </Link>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "./Store";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const dispatch = useDispatch();
  const { getOrderedItems, loading, error } = useSelector(
    (state) => state.getOrders
  );
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    if (user) {
      dispatch(fetchOrders()); // fetch summary or all orders
    }
  }, [dispatch, user]);

  return (
    <div className="orders-page">
      <h2>🛒 Your Orders</h2>

      {loading && <p>Fetching your orders...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && getOrderedItems.length === 0 && (
        <p>You have not placed any orders yet.</p>
      )}

      {getOrderedItems.length > 0 &&
        getOrderedItems.map((order) => (
          <div key={order._id} className="order-card">
            <div className="order-header">
              <span>Order #{order._id}</span>
              <span>Total: ₹{order.finalPayableAmount}</span>
            </div>

            {/* Show only first item */}
            {order.items[0] && (
              <div className="first-item">
                <img src={order.items[0].image} alt={order.items[0].name} />
                <span>{order.items[0].name}</span>
                <span>
                  {order.items[0].quantity} × ₹{order.items[0].price}
                </span>
              </div>
            )}

            <Link to={`/order/${order._id}`} className="view-details-btn">
              View Full Details
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Orders;
