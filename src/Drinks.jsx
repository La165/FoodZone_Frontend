// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchDrinkProducts } from "./Store";
// import { toast } from "react-toastify";
// function Drinks() {

//   const dispatch=useDispatch();
//   const {drinks,loading,error}=useSelector((state)=>state.drinks);
//     useEffect(()=>
//     {
//       dispatch(fetchDrinkProducts());
//     },[dispatch]);
  
// //   const drinks = [
// //     { id: 61, name: "Mango Juice", price: 80, image: "/drinks/mango.jpg", desc: "Fresh and chilled mango juice." },
// //     { id: 62, name: "Lemon Soda", price: 50, image: "/drinks/lemon.jpg", desc: "Refreshing lemon soda with mint." },
// //     { id: 63, name: "Cold Coffee", price: 120, image: "/drinks/coffee.jpg", desc: "Icy cold coffee with chocolate." },
// //     { id: 64, name: "Strawberry Milkshake", price: 150, image: "/drinks/strawberry.jpg", desc: "Creamy strawberry milkshake." },
// //     { id: 65, name: "Watermelon Juice", price: 70, image: "/drinks/watermelon.jpg", desc: "Sweet and refreshing watermelon juice." },
// //     { id: 66, name: "Masala Chai", price: 30, image: "/drinks/tea.jpg", desc: "Hot and refreshing Indian masala tea." },
// //     { id: 67, name: "Rose Milk", price: 50, image: "/drinks/rosemilk.jpg", des: "Refreshing pink rose-flavored milk." },
// // { id: 68, name: "Oreo Shake", price: 120, image: "/drinks/oreo.jpg", des: "Creamy shake blended with Oreo cookies." },
// // { id: 69, name: "Blue Lagoon", price: 130, image: "/drinks/lagoon.jpg", des: "Refreshing blue mocktail." },
// // { id: 70, name: "Mango Lassi", price: 90, image: "/drinks/lassi.jpg", des: "Sweet lassi flavored with mango." },
// // { id: 71, name: "Hot Chocolate", price: 100, image: "/drinks/hotchocolate.jpg", des: "Thick creamy chocolate drink." },

// //   ];
// // const dispatch = useDispatch();
//   const itemsPerPage = 6;
//   const totalPages = Math.ceil(drinks.length / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = drinks.slice(startIndex, startIndex + itemsPerPage);
//   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
// if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Drinks</h2>

//       <div className="row">
//         {currentItems.map((item) => (
//           <div className="col-md-4 mb-4" key={item.id}>
//             <div className="card shadow-lg h-100">

//               <img src={item.image} className="card-img-top"
//                 style={{ height: "230px", objectFit: "cover" }} />

//               <div className="card-body text-center">
//                 <h5>{item.name}</h5>
//                 <p>{item.desc}</p>
//                 <h6 className="text-primary fw-bold">₹ {item.price}</h6>
//                 <button className="btn btn-success mt-auto" onClick={() => {dispatch(addToCart(item));
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

// export default Drinks;

import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrinkProducts } from "./Store";
import ProductCard from "./ProductCard";

function Drinks() {
  const dispatch = useDispatch();
  const { drinks, loading, error } = useSelector((state) => state.drinks);

  useEffect(() => {
    dispatch(fetchDrinkProducts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(drinks.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = drinks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
  if (error) return <h3 className="text-center mt-4">Error: {error.message}</h3>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Drinks</h2>

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

export default Drinks;
