// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchBreakfastProducts } from "./Store";
// import { toast } from "react-toastify";

// function Breakfast() {
//   const dispatch = useDispatch();
//   const { breakfast, loading, error } = useSelector((state) => state.breakfast);

//   useEffect(() => {
//     dispatch(fetchBreakfastProducts());
//   }, [dispatch]);

//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(breakfast.length / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = breakfast.slice(startIndex, startIndex + itemsPerPage);

//   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
// if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Breakfast Items</h2>

//       <div className="row">
//         {currentItems.map((item) => (
//           <div key={item.id} className="col-md-4 col-lg-3 mb-4">
//             <div className="card shadow-lg h-100">
//               <img
//                 src={item.image}
//                 className="card-img-top"
//                 alt={item.name}
//                 style={{ height: "220px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">{item.des}</p>
//                 <h6 className="text-primary fw-bold">₹ {item.price}</h6>
//                 <button
//                   className="btn btn-success mt-auto"
//                   onClick={() => {dispatch(addToCart(item));
//                                         toast.success(`${item.name}  added to cart successfully`);}
//                   }
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={(num) => setCurrentPage(num)}
//       />
//     </div>
//   );
// }

// export default Breakfast;


import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreakfastProducts } from "./Store";
import ProductCard from "./ProductCard";

function Breakfast() {
  const dispatch = useDispatch();
  const { breakfast, loading, error } = useSelector((state) => state.breakfast);

  useEffect(() => {
    dispatch(fetchBreakfastProducts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(breakfast.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = breakfast.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
  if (error)
    return (
      <h3 className="text-center mt-4">Error: {error.message || error}</h3>
    );

  if (!loading && breakfast.length === 0)
    return <h3 className="text-center mt-4">No breakfast items found.</h3>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Breakfast Items</h2>

      <div className="row">
        {currentItems.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 mb-4">
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Breakfast;
