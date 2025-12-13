import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList({ title, fetchAction, selector }) {
  const dispatch = useDispatch();
  const slice = useSelector(selector);

  const items =
    slice.vegItems ||
    slice.nonVegItems ||
    slice.snacks ||
    slice.soups ||
    slice.sweets ||
    slice.drinks ||
    slice.breakfast ||
    slice.fastfood ||
    slice.bakery ||
    slice.items ||
    [];

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch, fetchAction]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{title}</h2>

      <div className="row">
        {items.length > 0 ? (
          items.map((item) => (
            <ProductCard key={item._id || item.id} product={item} />
          ))
        ) : (
          <h4 className="text-center">No items found</h4>
        )}
      </div>
    </div>
  );
}
