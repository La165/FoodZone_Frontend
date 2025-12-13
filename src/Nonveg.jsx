

// //   // let nonVegItems = [
// //   //   { id: 21, name: "Chicken Biryani", price: 250, image: "/images/chicken-biryani.jpg", des: "Hyderabadi style spicy chicken biryani." },
// //   //   { id: 22, name: "Mutton Biryani", price: 320, image: "/images/mutton-biryani.jpg", des: "Tender mutton cooked with biryani spices." },
// //   //   { id: 23, name: "Chicken Curry", price: 220, image: "/images/chicken-curry.jpg", des: "Traditional home-style chicken gravy." },
// //   //   { id: 24, name: "Mutton Curry", price: 350, image: "/images/mutton-curry.jpg", des: "Slow cooked mutton in rich gravy." },
// //   //   { id: 25, name: "Butter Chicken", price: 280, image: "/images/butter-chicken.jpg", des: "Creamy tomato gravy with tender chicken." },
// //   //   { id: 26, name: "Chicken Tikka", price: 260, image: "/images/chicken-tikka.jpg", des: "Tandoori grilled chicken pieces." },
// //   //   { id: 27, name: "Fish Fry", price: 200, image: "/images/fish-fry.jpg", des: "Crispy shallow-fried fish." },
// //   //   { id: 28, name: "Prawns Fry", price: 280, image: "/images/prawns-fry.jpg", des: "Spicy fried prawns." },
// //   //   { id: 29, name: "Chicken 65", price: 190, image: "/images/chicken65.jpg", des: "Crispy deep-fried chicken bites." }
// //   // ];
   
  


import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchNonVegProducts } from "./Store";
import ProductCard from "./ProductCard";

function Nonveg() {
  const dispatch = useDispatch();
  const { nonVegItems, loading, error } = useSelector((state) => state.nonveg);

  useEffect(() => {
    dispatch(fetchNonVegProducts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = nonVegItems.slice(
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
      <h2 className="text-center mb-4">Non-Veg Items</h2>

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

export default Nonveg;
