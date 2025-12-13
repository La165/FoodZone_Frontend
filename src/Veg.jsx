// // // // import React, { useEffect, useState } from "react";
// // // // import Pagination from "./Pagination";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { addToCart, fetchVegProducts } from "./Store";
// // // // import { toast } from "react-toastify";

// // // // function Veg() {
// // // // const dispatch=useDispatch();
// // // // const {vegItems,loading,error}=useSelector((state)=>state.veg);
// // // //   useEffect(()=>
// // // //   {
// // // //     dispatch(fetchVegProducts());
// // // //   },[dispatch]);

  
  
// // // //   // const vegItems = [
// // // //   //   { id: 1, name: "Paneer Masala", price: 230, image: "/images/paneer.jpg", des: "Rich and creamy paneer masala." },
// // // //   //   { id: 2, name: "Veg Biryani", price: 180, image: "/images/vegbiryani.jpg", des: "Hyderabadi-style aromatic veg biryani." },
// // // //   //   { id: 3, name: "Mushroom Curry", price: 200, image: "/images/mushroom.jpg", des: "Creamy mushroom gravy with spices." },
// // // //   //   { id: 4, name: "Aloo Gobi", price: 150, image: "/images/aloo-gobi.jpg", des: "Potato & cauliflower cooked in Indian spices." },
// // // //   //   { id: 5, name: "Chole Masala", price: 160, image: "/images/chole.jpg", des: "Punjabi-style chickpea curry." },
// // // //   //   { id: 6, name: "Dal Tadka", price: 140, image: "/images/dal-tadka.jpg", des: "Yellow dal tempered with ghee & spices." },
// // // //   //   { id: 7, name: "Kaju Curry", price: 260, image: "/images/kaju-curry.jpg", des: "Royal cashew curry with rich gravy." },
// // // //   //   { id: 8, name: "Paneer Tikka", price: 250, image: "/images/paneer-tikka.jpg", des: "Grilled paneer cubes marinated in tandoori spices." },
// // // //   //   { id: 9, name: "Veg Kadai", price: 190, image: "/images/veg-kadai.jpg", des: "Mixed veg cooked in kadai gravy." },
// // // //   //   { id: 10, name: "Palak Paneer", price: 220, image: "/images/palak-paneer.jpg", des: "Spinach gravy with soft paneer cubes." },
// // // //   //   { id: 11, name: "Veg Manchurian", price: 170, image: "/images/veg-manchurian.jpg", des: "Fried veg balls tossed in Indo-Chinese sauce." },
// // // //   //   { id: 12, name: "Gobi Manchurian", price: 160, image: "/images/gobi-manchurian.jpg", des: "Crispy cauliflower tossed in spicy sauce." },
// // // //   //   { id: 13, name: "Masala Dosa", price: 120, image: "/images/masala-dosa.jpg", des: "Golden dosa stuffed with potato masala." },
// // // //   //   { id: 14, name: "Idli Sambar", price: 80, image: "/images/idli-sambar.jpg", des: "Soft idlis served with tasty sambar." },
// // // //   //   { id: 15, name: "Veg Fried Rice", price: 150, image: "/images/veg-fried-rice.jpg", des: "Indo-Chinese style fried rice." }
// // // //   // ];

// // // //   const itemsPerPage = 8;
// // // //   const totalPages = Math.ceil(vegItems.length / itemsPerPage);

// // // //   const [currentPage, setCurrentPage] = useState(1);


// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const currentItems = vegItems.slice(startIndex, startIndex + itemsPerPage);
// // // //   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
// // // //   if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;


// // // //   return (
// // // //     <div className="container mt-4">
// // // //       <h2 className="text-center mb-4">Veg Items</h2>

// // // //       <div className="row">
// // // //         {currentItems.map((item) => (
// // // //           <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
// // // //             <div className="card shadow-sm h-100">
// // // //               <img
// // // //                 src={item.image}
// // // //                 alt={item.name}
// // // //                 className="card-img-top"
// // // //                 style={{ height: "250px", objectFit: "cover" }}
// // // //               />
// // // //               <div className="card-body d-flex flex-column">
// // // //                 <h5 className="card-title">{item.name}</h5>
// // // //                 <p className="card-text">{item.des}</p>
// // // //                 <h6 className="text-primary fw-bold">₹{item.price}</h6>
// // // //                 <button
// // // //                   className="btn btn-success mt-auto"
// // // //                   onClick={() =>{ dispatch(addToCart(item));
// // // //                     toast.success(`${item.name}  added to cart successfully`);
// // // //                   }}
// // // //                 >
// // // //                   Add to Cart
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <Pagination
// // // //         currentPage={currentPage}
// // // //         totalPages={totalPages}
// // // //         onPageChange={(num) => setCurrentPage(num)}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Veg;
// // // import React, { useEffect, useState } from "react";
// // // import Pagination from "./Pagination";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { addToCart, fetchVegProducts } from "./Store";
// // // import { toast } from "react-toastify";
// // // import "./ProductCard.css";   // ✅ Common CSS

// // // function Veg() {
// // //   const dispatch = useDispatch();
// // //   const { vegItems, loading, error } = useSelector((state) => state.veg);

// // //   useEffect(() => {
// // //     dispatch(fetchVegProducts());
// // //   }, [dispatch]);

// // //   const itemsPerPage = 8;
// // //   const totalPages = Math.ceil(vegItems.length / itemsPerPage);

// // //   const [currentPage, setCurrentPage] = useState(1);

// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const currentItems = vegItems.slice(startIndex, startIndex + itemsPerPage);

// // //   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
// // //   if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;

// // //   return (
// // //     <div className="container mt-4">
// // //       <h2 className="text-center mb-4">Veg Items</h2>

// // //       <div className="row">
// // //         {currentItems.map((item) => (
// // //           <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
// // //             <div className="product-card">
// // //               <img src={item.image} alt={item.name} />

// // //               <div className="product-card-body">
// // //                 <h5 className="product-card-title">{item.name}</h5>
// // //                 <p className="product-card-des">{item.des}</p>

// // //                 <h6 className="product-card-price">₹{item.price}</h6>

// // //                 <button
// // //                   className="product-add-btn"
// // //                   onClick={() => {
// // //                     dispatch(addToCart(item));
// // //                     toast.success(`${item.name} added to cart successfully`);
// // //                   }}
// // //                 >
// // //                   Add to Cart
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <Pagination
// // //         currentPage={currentPage}
// // //         totalPages={totalPages}
// // //         onPageChange={(num) => setCurrentPage(num)}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // export default Veg;

// // import React from "react";
// // import ProductList from "./ProductList";
// // import { fetchVegProducts } from "./Store";

// // export default function Veg() {
// //   return (
// //     <ProductList
// //       title="Veg Items"
// //       fetchAction={fetchVegProducts}
// //       selector={(state) => state.veg}
// //     />
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchVegProducts } from "./Store";
// import { toast } from "react-toastify";
// import "./ProductCard.css";   // ✅ Common CSS

// function Veg() {
//   const dispatch = useDispatch();
//   const { vegItems, loading, error } = useSelector((state) => state.veg);

//   useEffect(() => {
//     dispatch(fetchVegProducts());
//   }, [dispatch]);

//   const itemsPerPage = 8;
//   const totalPages = Math.ceil(vegItems.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = vegItems.slice(startIndex, startIndex + itemsPerPage);

//   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
//   if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Veg Items</h2>

//       <div className="row">
//         {currentItems.map((item) => (
//           <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
//             <div className="product-card">
//               <img src={item.image} alt={item.name} />

//               <div className="product-card-body">
//                 <h5 className="product-card-title">{item.name}</h5>
//                 <p className="product-card-des">{item.des}</p>

//                 <h6 className="product-card-price">₹{item.price}</h6>

//                 <button
//                   className="product-add-btn"
//                   onClick={() => {
//                     dispatch(addToCart(item));
//                     toast.success(`${item.name} added to cart successfully`);
//                   }}
//                 >
//                   Add to Cart
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

// // export default Veg;
// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchVegProducts } from "./Store";
// import { toast } from "react-toastify";
// import "./ProductCard.css";   // ✅ Import common card styles

// function Veg() {
//   const dispatch = useDispatch();
//   const { vegItems, loading, error } = useSelector((state) => state.veg);

//   useEffect(() => {
//     dispatch(fetchVegProducts());
//   }, [dispatch]);

//   const itemsPerPage = 8;
//   const totalPages = Math.ceil(vegItems.length / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = vegItems.slice(startIndex, startIndex + itemsPerPage);

//   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
//   if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Veg Items</h2>

//       <div className="row">
//         {currentItems.map((item) => (
//           <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
            
//             <div className="product-card h-100">
//               <img src={item.image} alt={item.name} className="product-card-img" />

//               <div className="product-card-body">
//                 <h5 className="product-card-title">{item.name}</h5>
//                 <p className="product-card-des">{item.des}</p>

//                 <h6 className="product-card-price">₹{item.price}</h6>

//                 <button
//                   className="btn btn-success product-card-button"
//                   onClick={() => {
//                     dispatch(addToCart(item));
//                     toast.success(`${item.name} added to cart successfully`);
//                   }}
//                 >
//                   Add to Cart
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

// export default Veg;

import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchVegProducts } from "./Store";
import ProductCard from "./ProductCard";

function Veg() {
  const dispatch = useDispatch();
  const { vegItems, loading, error } = useSelector((state) => state.veg);

  useEffect(() => {
    dispatch(fetchVegProducts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = vegItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
  if (error)
    return (
      <h3 className="text-center mt-4">Error: {error.message || error}</h3>
    );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Veg Items</h2>

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

export default Veg;
