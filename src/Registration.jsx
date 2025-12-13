// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import { useDispatch, useSelector } from "react-redux";

// // import "./Registration.css";
// // import { registerUserThunk } from "./Store";

// // const Registration = () => {
// //   const dispatch = useDispatch();
// //   const { loading, message, error } = useSelector((state) => state.auth);

// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm();

// //   const submitForm = (data) => {
// //     dispatch(registerUserThunk(data));
// //     reset();
// //   };

// //   return (
// //     <div className="reg-containter">
// //       <form className="reg-form" onSubmit={handleSubmit(submitForm)}>
// //         <h2>Registration</h2>

// //         {loading && <p className="info">Processing...</p>}
// //         {message && <p className="success">{message}</p>}
// //         {error && <p className="error">{error}</p>}

// //         <input
// //           type="text"
// //           placeholder="Name"
// //           {...register("name", { required: "Name is required" })}
// //         />
// //         {errors.name && <p className="error">{errors.name.message}</p>}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           {...register("email", { required: "Email is required" })}
// //         />
// //         {errors.email && <p className="error">{errors.email.message}</p>}

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           {...register("password", { required: "Password is required" })}
// //         />
// //         {errors.password && <p className="error">{errors.password.message}</p>}

// //         <input
// //           type="text"
// //           placeholder="Phone"
// //           {...register("phone", { required: "Phone is required" })}
// //         />
// //         {errors.phone && <p className="error">{errors.phone.message}</p>}

// //         <textarea
// //           placeholder="Address"
// //           {...register("address", { required: "Address is required" })}
// //         ></textarea>
// //         {errors.address && <p className="error">{errors.address.message}</p>}

// //         <button type="submit" disabled={loading}>
// //           {loading ? "Submitting..." : "Register"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Registration;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

// import "./Registration.css";
// import { registerUserThunk } from "./Store";

// const Registration = () => {
//   const dispatch = useDispatch();
//   const { loading, message, error } = useSelector((state) => state.auth);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const submitForm = (data) => {
//     dispatch(registerUserThunk(data));
//     reset();
//   };

//   return (
//     <div className="reg-container">
//       <form className="reg-form" onSubmit={handleSubmit(submitForm)}>
//         <h2>Registration</h2>

//         {loading && <p className="info">Processing...</p>}
//         {message && <p className="success">{message}</p>}
//         {error && <p className="error">{error}</p>}

//         <input
//           type="text"
//           placeholder="Name"
//           {...register("name", { required: "Name is required" })}
//         />
//         {errors.name && <p className="error">{errors.name.message}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email", { required: "Email is required" })}
//         />
//         {errors.email && <p className="error">{errors.email.message}</p>}

//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: "Password is required" })}
//         />
//         {errors.password && <p className="error">{errors.password.message}</p>}

//         <input
//           type="text"
//           placeholder="Phone"
//           {...register("phone", { required: "Phone is required" })}
//         />
//         {errors.phone && <p className="error">{errors.phone.message}</p>}

//         <textarea
//           placeholder="Address"
//           {...register("address", { required: "Address is required" })}
//         ></textarea>
//         {errors.address && <p className="error">{errors.address.message}</p>}

//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;


import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Registration.css";
import { registerUserThunk } from "./Store";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 👉 navigation hook

  const { loading, message, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    dispatch(registerUserThunk(data));
    reset();
  };

  return (
    <div className="reg-container">
      <form className="reg-form" onSubmit={handleSubmit(submitForm)}>
        <h2>Registration</h2>

        {loading && <p className="info">Processing...</p>}
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input
          type="text"
          placeholder="Phone"
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        <textarea
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
        ></textarea>
        {errors.address && <p className="error">{errors.address.message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Register"}
        </button>

        {/* 👉 LOGIN REDIRECT */}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            style={{
              color: "blue",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Registration;
