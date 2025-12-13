// // // // // 
// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { loginUserThunk } from "./Store";

// // // const Login = () => {
// // //   const dispatch = useDispatch();
// // //   const { loading, error } = useSelector((state) => state.login);

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     dispatch(loginUserThunk({ email, password }))
// // //       .unwrap()
// // //       .then((data) => {
// // //         alert(data.message); // "Login Successful!"
// // //         console.log("User:", data.user);
// // //       })
// // //       .catch((err) => {
// // //         alert(err);
// // //       });
// // //   };

// // //   return (
// // //     <div style={{ width: 300, margin: "auto", marginTop: 100 }}>
// // //       <h2>Login</h2>

// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="email"
// // //           placeholder="Enter Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           style={{ width: "100%", padding: 10, marginBottom: 10 }}
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Enter Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           style={{ width: "100%", padding: 10, marginBottom: 10 }}
// // //         />

// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           style={{ width: "100%", padding: 10 }}
// // //         >
// // //           {loading ? "Logging in..." : "Login"}
// // //         </button>
// // //       </form>

// // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import "./Login.css";
// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { loginUserThunk } from "./Store";
// // import { useNavigate } from "react-router-dom";


// // const Login = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const { loading, error } = useSelector((state) => state.login);

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     dispatch(loginUserThunk({ email, password }))
// //       .unwrap()
// //       .then((data) => {
// //         alert(data.message);
// //         navigate("/"); // redirect home after login
// //       })
// //       .catch((err) => {
// //         alert(err);

// //         // If backend returns "User not found" → redirect to register
// //         if (err === "User not found") {
// //           navigate("/register");
// //         }
// //       });
// //   };

// //   return (
// //     <div style={{ width: 300, margin: "auto", marginTop: 100 }}>
// //       <h2>Login</h2>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="email"
// //           placeholder="Enter Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           style={{ width: "100%", padding: 10, marginBottom: 10 }}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Enter Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           style={{ width: "100%", padding: 10, marginBottom: 10 }}
// //         />

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           style={{ width: "100%", padding: 10 }}
// //         >
// //           {loading ? "Logging in..." : "Login"}
// //         </button>
// //       </form>

// //       {/* WRONG ACCOUNT? */}
// //       <div style={{ marginTop: 15, textAlign: "center" }}>
// //         <p
// //           style={{ color: "blue", cursor: "pointer" }}
// //           onClick={() => navigate("/forgot-password")}
// //         >
// //           Forgot Password?
// //         </p>

// //         <p>
// //           Don’t have an account?{" "}
// //           <span
// //             style={{ color: "blue", cursor: "pointer" }}
// //             onClick={() => navigate("/register")}
// //           >
// //             Register
// //           </span>
// //         </p>
// //       </div>

// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserThunk } from "./Store";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Login.css"; // Import CSS

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
// const location = useLocation();
//   const from = location.state?.from || "/"; // fallback

//   const { loading, error, user } = useSelector((state) => state.login);

//   useEffect(() => {
//     // If user becomes present (login success), redirect to origin page
//     if (user) {
//       navigate(from, { replace: true });
//     }
//   }, [user, navigate, from]);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(loginUserThunk({ email, password }))
//       .unwrap()
//       .then((data) => {
//         alert(data.message);
//         navigate("/"); // redirect home after login
//       })
//       .catch((err) => {
//         alert(err);

//         // If backend returns "User not found" → redirect to register
//         if (err === "User not found") {
//           navigate("/register");
//         }
//       });
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <div className="login-links">
//           <p onClick={() => navigate("/forgot-password")}>Forgot Password?</p>
//           <p>
//             Don’t have an account?{" "}
//             <span onClick={() => navigate("/register")}>Register</span>
//           </p>
//         </div>

//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "./Store";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/"; // fallback

  const { loading, error, user } = useSelector((state) => state.login);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUserThunk({ email, password }))
      .unwrap()
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: data.message,
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/"); // redirect home after login
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err,
        });

        if (err === "User not found") {
          navigate("/register");
        }
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="login-links">
          <p onClick={() => navigate("/forgot-password")}>Forgot Password?</p>
          <p>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
