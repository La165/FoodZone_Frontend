import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map(n => n + 1);

  return (
    <div className="d-flex justify-content-center mt-3">
      <nav>
        <ul className="pagination">

          {/* Previous Button */}
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
              Prev
            </button>
          </li>

          {/* Page Numbers */}
          {pages.map((num) => (
            <li
              key={num}
              className={`page-item ${num === currentPage && "active"}`}
            >
              <button className="page-link" onClick={() => onPageChange(num)}>
                {num}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
              Next
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
