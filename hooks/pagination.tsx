import { useState } from "react";
export default function handlePagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return {
    indexOfFirstItem,
    setCurrentPage,
    indexOfLastItem,
    itemsPerPage,
    currentPage,
  };
}
