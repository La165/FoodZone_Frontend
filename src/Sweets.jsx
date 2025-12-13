// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchSweets } from "./Store";
// import { toast } from "react-toastify";
// function Sweets() {
//   const dispatch=useDispatch();
//   const {sweetItems,loading,error}=useSelector((state)=>state.sweets);
//     useEffect(()=>
//     {
//       dispatch(fetchSweets());
//     },[dispatch]);
  
// //   const sweetItems = [
// //     { id: 41, name: "Gulab Jamun", price: 120, image: "/sweets/gulabjamun.jpg", des: "Soft fried balls soaked in sugar syrup." },
// //     { id: 42, name: "Rasgulla", price: 150, image: "/sweets/rasgulla.jpg", des: "Spongy cottage cheese balls in sweet syrup." },
// //     { id: 43, name: "Laddu", price: 100, image: "/sweets/laddu.jpg", des: "Traditional sweet ball made with ghee & flour." },
// //     { id: 44, name: "Kaju Katli", price: 250, image: "/sweets/kaju katli.jpg", des: "Thin diamond cashew sweets." },
// //     { id: 45, name: "Mysore Pak", price: 180, image: "/sweets/mysorepak.jpg", des: "Ghee-rich melt-in-mouth sweet." },
// //     { id: 46, name: "Halwa", price: 90, image: "/sweets/halwa.jpg", des: "Delicious Indian sweet made with sooji & ghee." },
// // { id: 47, name: "Rasmalai", price: 120, image: "/sweets/rasmalai.jpg", des: "Soft paneer balls soaked in sweet saffron milk." },

// // { id: 48, name: "Badusha", price: 80, image: "/sweets/badusha.jpg", des: "Flaky sweet soaked in sugar syrup." },
// // { id: 49, name: "Boondi Laddu", price: 60, image: "/sweets/boondi-laddu.jpg", des: "Traditional festival sweet." },
// // { id: 50, name: "Gajar Ka Halwa", price: 110, image: "/sweets/gajar-halwa.jpg", des: "Carrot sweet cooked in ghee & milk." },


// //   ];

//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(sweetItems.length / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = sweetItems.slice(startIndex, startIndex + itemsPerPage);
//   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
//   if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;



//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Sweet Items</h2>

//       <div className="row">
//         {currentItems.map((item) => (
//           <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
//             <div className="card shadow-lg h-100">

//               <img src={item.image} className="card-img-top" alt={item.name}
//                 style={{ height: "220px", objectFit: "cover" }} />

//               <div className="card-body">
//                 <h5>{item.name}</h5>
//                 <p>{item.des}</p>
//                 <h6 className="text-primary">₹ {item.price}</h6>
//               </div>

//               <div className="card-footer text-center">
//                 <button className="btn btn-success mt-auto"onClick={() => {dispatch(addToCart(item));
//                                       toast.success(`${item.name}  added to cart successfully`);}
//                 }
// >Add to cart</button>
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

// export default Sweets;


import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchSweets } from "./Store";
import { toast } from "react-toastify";

function Sweets() {
  const dispatch = useDispatch();

  // Redux state for sweets
  const { sweetItems, loading, error } = useSelector((state) => state.sweets);

  useEffect(() => {
    dispatch(fetchSweets());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(sweetItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sweetItems.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
  if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sweet Items</h2>

      <div className="row">
        {currentItems.map((item) => (
          <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card shadow-lg h-100 d-flex flex-column">

              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body flex-grow-1">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.des}</p>
                <h6 className="text-primary">₹ {item.price}</h6>
              </div>

              <div className="card-footer text-center bg-white">
                <button
                  className="btn btn-success w-100"
                  onClick={() => {
                    dispatch(addToCart(item));
                    toast.success(`${item.name} added to cart successfully`);
                  }}
                >
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(num) => setCurrentPage(num)}
      />
    </div>
  );
}

export default Sweets;
