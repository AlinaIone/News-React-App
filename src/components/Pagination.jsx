import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import styles from "./Pagination.module.css";
export const NewsPagination = (props) => {
  const { category, pageNumber, total } = props;
  const navigate = useNavigate();
  // console.log(navigate);

  let items = [];
  let totalPages = 5;
  let midpoint = totalPages / 2;

  pageNumber > 1 &&
    items.push(
      <Pagination.First key="first" onClick={() => navigate(`?page=1`)} />,
      <Pagination.Prev
        key="prev"
        onClick={() => navigate(`?page=${pageNumber - 1}`)}
      />
    );

  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={pageNumber ? page == pageNumber : page == 1}
        id={pageNumber ? styles.paginationActive : null}
        onClick={() => {
          navigate(`?page=${page}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {page}
      </Pagination.Item>
    );
  }

  pageNumber < 10 &&
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => navigate(`?page=${Number(pageNumber) + 1}`)}
      />,
      <Pagination.Last
        key="last"
        onClick={() => navigate(`?page=${totalPages}`)}
      />
    );

  return (
    <div className="d-flex justify-content-center align-item-center mt-3 mb-4">
      <Pagination className={styles.pagination} size="lg">
        {items}
      </Pagination>
    </div>
  );
};
