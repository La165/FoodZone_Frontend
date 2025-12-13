// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Link, useNavigate } from "react-router-dom";
// // import { logout } from "./Store";


// // const Navbar = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // Please ensure your login slice reducer is mounted at state.login
// //   const { user } = useSelector((state) => state.login);
// //   // If you store cart in state.cart (array)
// //   const cartItems = useSelector((state) => state.cart || []);
// //   const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

// //   const handleLogout = () => {
// //     dispatch(logout());
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //       <div className="container-fluid">
// //         <Link className="navbar-brand" to="/home">FoodZone</Link>

// //         <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse" id="navbarNav">
// //           <ul className="navbar-nav ms-auto">
// //             <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/veg">Veg Items</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/nonveg">Non Veg Items</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/sweets">Sweets</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/breakfast">Breakfast</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/snacks">Snacks</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/drinks">Drinks</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/fastfood">FastFood</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/desserts">Desserts</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/soups">Soups</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/bakery">Bakery</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cartCount})</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
// //             <li className="nav-item"><Link className="nav-link" to="/contactus">ContactUs</Link></li>

// //             {/* When not logged in show Register + Login */}
// //             {!user && (
// //               <>
// //                 <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
// //                 <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
// //               </>
// //             )}

// //             {/* When logged in show Welcome + Logout */}
// //             {user && (
// //               <>
// //                 <li className="nav-item">
// //                   <span className="nav-link">Welcome, {user.name || user.username || "User"}</span>
// //                 </li>
// //                 <li className="nav-item">
// //                   <button
// //                     className="btn btn-warning"
// //                     onClick={handleLogout}
// //                     style={{ marginLeft: 8 }}
// //                   >
// //                     Logout
// //                   </button>
// //                 </li>
// //               </>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { logout } from "./Store";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.login);
//   const cartItems = useSelector((state) => state.cart || []);
//   const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = () => {
//     dispatch(logout());
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/home">FoodZone</Link>

//         <button
//           className="navbar-toggler"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/veg">Veg Items</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/nonveg">Non Veg Items</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/sweets">Sweets</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/breakfast">Breakfast</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/snacks">Snacks</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/drinks">Drinks</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/fastfood">FastFood</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/desserts">Desserts</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/soups">Soups</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/bakery">Bakery</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cartCount})</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/contactus">ContactUs</Link></li>

//             {/* User dropdown */}
//             <li className="nav-item dropdown">
//               <button
//                 className="btn btn-primary dropdown-toggle"
//                 type="button"
//                 onClick={toggleDropdown}
//                 style={{ marginLeft: 8, color: "white", borderColor: "#131415ff", backgroundColor: "hsla(210, 10%, 12%, 1.00)" }}
//               >
//                 {!user ? "Account" : user.name || user.username || "User"}
//               </button>

//               {dropdownOpen && (
//                 <ul
//                   className="dropdown-menu dropdown-menu-end show"
//                   style={{ minWidth: "150px", right: 0, left: "auto" }}
//                 >
//                   {!user ? (
//                     <>
//                       <li>
//                         <button
//                           className="dropdown-item"
//                           onClick={() => {
//                             navigate("/login");
//                             setDropdownOpen(false);
//                           }}
//                         >
//                           Login
//                         </button>
//                       </li>
//                       <li>
//                         <button
//                           className="dropdown-item"
//                           onClick={() => {
//                             navigate("/register");
//                             setDropdownOpen(false);
//                           }}
//                         >
//                           Register
//                         </button>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li>
//                         <button
//                           className="dropdown-item"
//                           onClick={() => {
//                             navigate("/profile");
//                             setDropdownOpen(false);
//                           }}
//                         >
//                           Profile
//                         </button>
//                       </li>
//                       <li>
//                         <button
//                           className="dropdown-item"
//                           onClick={handleLogout}
//                         >
//                           Logout
//                         </button>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./Store";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
  const cartItems = useSelector((state) => state.cart || []);
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">FoodZone</Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/veg">Veg Items</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nonveg">Non Veg Items</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sweets">Sweets</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/breakfast">Breakfast</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/snacks">Snacks</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/drinks">Drinks</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/fastfood">FastFood</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/desserts">Desserts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/soups">Soups</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/bakery">Bakery</Link></li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart ({cartCount})</Link>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contactus">ContactUs</Link></li>

            {/* ⭐ Welcome → Acts as Profile Button */}
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Welcome, {user.name || user.username || "User"}
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-warning ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
