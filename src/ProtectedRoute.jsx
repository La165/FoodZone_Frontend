// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const user = useSelector((state) => state.login.user);
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.login.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;

  }

  return children;
};

export default ProtectedRoute;
