// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();

//   // Get user info from Redux state
//   const { user } = useSelector((state) => state.login);

//   // Redirect to login if not logged in
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div
//       style={{
//         maxWidth: 500,
//         margin: "50px auto",
//         padding: 20,
//         backgroundColor: "#f8f9fa",
//         borderRadius: 10,
//         boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: 20 }}>Profile</h2>

//       <div style={{ marginBottom: 10 }}>
//         <strong>Name:</strong> {user.name || user.username}
//       </div>
//       <div style={{ marginBottom: 10 }}>
//         <strong>Email:</strong> {user.email}
//       </div>
//       <div style={{ marginBottom: 10 }}>
//         <strong>Phone:</strong> {user.phone || "N/A"}
//       </div>
//       <div style={{ marginBottom: 10 }}>
//         <strong>Address:</strong> {user.address || "N/A"}
//       </div>

//       <button
//         onClick={() => navigate("/home")}
//         style={{
//           marginTop: 20,
//           width: "100%",
//           padding: 10,
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: 5,
//           cursor: "pointer",
//           fontWeight: "bold",
//         }}
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./Store";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);
  const { getOrderedItems } = useSelector((state) => state.getOrders);

  const [darkMode, setDarkMode] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [profilePic, setProfilePic] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );

  if (!user) {
    navigate("/login");
    return null;
  }

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(135deg, #212121, #000)"
          : "linear-gradient(135deg, #e3f2fd, #fce4ec)",
        color: darkMode ? "#fff" : "#000",
        transition: "0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 550,
          margin: "auto",
          background: darkMode ? "#1e1e1e" : "#fff",
          padding: 30,
          borderRadius: 25,
          boxShadow: darkMode
            ? "0 6px 20px rgba(255,255,255,0.1)"
            : "0 6px 20px rgba(0,0,0,0.15)",
          transition: "0.3s ease",
        }}
      >
        {/* Theme Toggle */}
        <div style={{ textAlign: "right" }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: "none",
              background: darkMode ? "#fff" : "#333",
              color: darkMode ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>

        {/* Profile Image */}
        <div style={{ textAlign: "center" }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #007bff",
              padding: 4,
              marginBottom: 10,
            }}
          />

          <div className="mt-2">
            <label
              style={{
                padding: "6px 12px",
                background: "#007bff",
                color: "#fff",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          </div>

          <h2 style={{ marginTop: 15 }}>{user.name || user.username}</h2>
          <p style={{ color: darkMode ? "#bbb" : "#777" }}>Welcome back 👋</p>
        </div>

        {/* User Details Section */}
        <div style={{ marginTop: 25 }}>
          {infoRow("Email", user.email)}
          {infoRow("Phone", user.phone || "N/A")}
          {infoRow("Address", user.address || "N/A")}
        </div>

        {/* Edit Profile Toggle */}
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button
            onClick={() => setShowEdit(!showEdit)}
            style={smallButton(darkMode)}
          >
            {showEdit ? "Close Edit" : "Edit Profile ✏️"}
          </button>
        </div>

        {/* Edit Form */}
        {showEdit && (
          <div
            style={{
              marginTop: 20,
              padding: 15,
              background: darkMode ? "#333" : "#f7f7f7",
              borderRadius: 10,
            }}
          >
            <h4>Edit Info</h4>
            <input style={inputStyle} placeholder="Name" />
            <input style={inputStyle} placeholder="Phone" />
            <input style={inputStyle} placeholder="Address" />
            <button style={saveBtn}>Save Changes</button>
          </div>
        )}

        {/* Orders Summary */}
        <div
          style={{
            marginTop: 30,
            padding: 15,
            background: darkMode ? "#333" : "#f7f7f7",
            borderRadius: 15,
          }}
        >
          <h4>📦 Your Orders Summary</h4>
          <p>Total Orders: <strong>{getOrderedItems?.length || 0}</strong></p>

          <button
            onClick={() => navigate("/orders")}
            style={smallButton(darkMode)}
          >
            View Orders →
          </button>
        </div>

        {/* Bottom Buttons */}
        <button onClick={() => navigate("/home")} style={mainButton}>
          Back to Home
        </button>

        <button onClick={handleLogout} style={logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
};

/* ---------- Helper UI Components ---------- */

const infoRow = (label, value) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 15px",
      background: "#eee",
      marginBottom: 12,
      borderRadius: 10,
      fontSize: "15px",
    }}
  >
    <strong>{label}:</strong>
    <span>{value}</span>
  </div>
);

const smallButton = (dark) => ({
  padding: "8px 14px",
  borderRadius: 10,
  border: "none",
  background: dark ? "#555" : "#007bff",
  color: "#fff",
  cursor: "pointer",
  marginTop: 10,
});

const inputStyle = {
  width: "100%",
  padding: 10,
  margin: "8px 0",
  borderRadius: 8,
  border: "1px solid #ccc",
};

const saveBtn = {
  width: "100%",
  padding: 10,
  marginTop: 5,
  borderRadius: 8,
  background: "green",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const mainButton = {
  marginTop: 25,
  width: "100%",
  padding: 12,
  background: "linear-gradient(90deg, #007bff, #0056d2)",
  color: "#fff",
  border: "none",
  borderRadius: 12,
  fontSize: 16,
  cursor: "pointer",
};

const logoutButton = {
  marginTop: 10,
  width: "100%",
  padding: 12,
  background: "#29d740ff",
  color: "#fff",
  border: "none",
  borderRadius: 12,
  fontSize: 16,
  cursor: "pointer",
};

export default Profile;
