


import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchBakeryProducts } from "./Store";
import ProductCard from "./ProductCard";

function Bakery() {
  const dispatch = useDispatch();
  const { bakery, loading, error } = useSelector((state) => state.bakery);

  useEffect(() => {
    dispatch(fetchBakeryProducts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(bakery.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = bakery.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
  if (error)
    return (
      <h3 className="text-center mt-4">Error: {error.message || error}</h3>
    );

  if (!loading && bakery.length === 0)
    return <h3 className="text-center mt-4">No bakery items found.</h3>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Bakery Items</h2>

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

export default Bakery;
