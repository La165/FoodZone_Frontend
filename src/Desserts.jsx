// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchDessertProducts } from "./Store";
// import { toast } from "react-toastify";
// function Desserts() {

//   const dispatch=useDispatch();
//   const {desserts,loading,error}=useSelector((state)=>state.desserts);
//     useEffect(()=>
//     {
//       dispatch(fetchDessertProducts());
//     },[dispatch]);
  
// //   const desserts = [
// //     {
// //       id: 81,
// //       name: "Chocolate Brownie",
// //       price: 150,
// //       image: "/desserts/brownie.jpg",
// //       des: "Warm and fudgy chocolate brownie."
// //     },
// //     {
// //       id: 82,
// //       name: "Ice Cream Sundae",
// //       price: 120,
// //       image: "/desserts/sundae.jpg",
// //       des: "Vanilla ice cream topped with nuts & chocolate."
// //     },
// //     {
// //       id: 83,
// //       name: "Chocolate Lava Cake",
// //       price: 180,
// //       image: "/desserts/lava-cake.jpg",
// //       des: "Hot chocolate cake with molten center."
// //     },
// //     {
// //       id: 84,
// //       name: "Fruit Salad",
// //       price: 90,
// //       image: "/desserts/fruit-salad.jpg",
// //       des: "Fresh mixed fruit bowl."
// //     },
// //     {
// //       id: 85,
// //       name: "Ice Cream (3 Scoops)",
// //       price: 140,
// //       image: "/desserts/icecream.jpg",
// //       des: "Three scoops of your favourite flavors."
// //     },
// //     {
// //       id: 86,
// //       name: "Gajar Halwa",
// //       price: 130,
// //       image: "/desserts/gajar-halwa.jpg",
// //       des: "Traditional carrot halwa with ghee & dry fruits."
// //     },
// //     {
// //       id: 87,
// //       name: "Rabdi",
// //       price: 160,
// //       image: "/desserts/rabdi.jpg",
// //       des: "Slow-cooked thick sweetened milk dessert."
// //     },
// //     {
// //       id: 88,
// //       name: "Kulfi",
// //       price: 100,
// //       image: "/desserts/kulfi.jpg",
// //       des: "Creamy and classic Indian kulfi."
// //     },
// // { id: 89, 
// //     name: "Red Velvet Cake", 
// //     price: 160, 
// //     image: "/desserts/redvelvet.jpg", 
// //     des: "Soft velvety cake with cream cheese frosting." },
// //     { id: 90, name: "Ice Cream (Butterscotch)", price: 70, image: "/desserts/butterscotch.jpg", des: "Creamy butterscotch ice cream." },

// // { id: 91, name: "Falooda", price: 120, image: "/desserts/falooda.jpg", des: "Layered dessert with vermicelli & ice cream." },
// // { id: 92, name: "Chocolate Mousse", price: 140, image: "/desserts/chocolate-mousse.jpg", des: "Light & airy chocolate dessert." },
// // { id: 93, name: "Cheesecake", price: 180, image: "/desserts/cheesecake.jpg", des: "Creamy cheesecake with biscuit base." },
// // { id: 94, name: "Waffles", price: 150, image: "/desserts/waffles.jpg", des: "Crispy waffles served with honey." },
// // { id: 95, name: "Pancakes", price: 130, image: "/desserts/pancakes.jpg", des: "Fluffy pancakes with chocolate syrup." },


// //   ];
// //  const dispatch = useDispatch();
//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(desserts.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = desserts.slice(startIndex, startIndex + itemsPerPage);
//   if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
//   if (error) return <h3 className="text-center mt-4">Error: {error.message || error}</h3>;


//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Desserts</h2>

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
//                 <button className="btn btn-success mt-auto"      onClick={() => {dispatch(addToCart(item));
//                                     toast.success(`${item.name}  added to cart successfully`);}}>Add to cart</button>
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

// export default Desserts;


import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchDessertProducts } from "./Store";
import ProductCard from "./ProductCard";

function Desserts() {
  const dispatch = useDispatch();
  const { desserts, loading, error } = useSelector((state) => state.desserts);

  useEffect(() => {
    dispatch(fetchDessertProducts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(desserts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = desserts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
  if (error)
    return (
      <h3 className="text-center mt-4">Error: {error.message || error}</h3>
    );

  if (!loading && desserts.length === 0)
    return <h3 className="text-center mt-4">No desserts found.</h3>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Desserts</h2>

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

export default Desserts;
