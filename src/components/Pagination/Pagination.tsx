import "bulma/css/bulma.min.css";
import React from "react";

export const getPageNumbers = (from: number, to: number): number[] => {
  const numbers = [];

  for (let i = from; i <= to; i += 1) {
    numbers.push(i);
  }

  return numbers;
};

interface Props {
  userPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<Props> = ({
  userPerPage,
  totalUsers,
  paginate,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pageNumber.map((number) => (
          <li key={number}>
            <a
              className="pagination-link"
              href="#!"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
