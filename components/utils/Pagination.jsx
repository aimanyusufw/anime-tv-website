import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ setPage, page, lastPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  const prevPage = () => {
    setPage(page - 1);
    scrollTop();
  };

  const nextPage = () => {
    setPage(page + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className={`px-5 py-3 bg-black bg-opacity-50 rounded-xl ${
          page === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft />
      </button>
      <span className="px-5 mx-3 py-3 bg-black bg-opacity-50 rounded-xl">
        {page}
      </span>
      <button
        disabled={page === lastPage}
        onClick={nextPage}
        className={`px-5 py-3 bg-black bg-opacity-50 rounded-xl ${
          page === lastPage ? "cursor-not-allowed" : ""
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
