import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex gap-[10px] justify-end text-white items-center">
        <p className="text-white bg-[#D9D9D9] px-2 py-1 rounded-lg">&lt;</p>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={() => paginate(number)}
              className={
                currentPage === number
                  ? "active bg-bluebg px-2 py-1 rounded-lg"
                  : "bg-[#72c0e5] px-2 py-1 rounded-lg"
              }
            >
              {number}
            </a>
          </li>
        ))}
        <p className="text-white bg-[#D9D9D9] px-2 py-1 rounded-lg">&gt;</p>
      </ul>
    </nav>
  );
};

export default Pagination;
