import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import styles from "./Pagination.module.css";

export const NewsPagination = (props) => {
  const { pageNumber } = props;
  const navigate = useNavigate();

  let items = [];
  let totalPages = 6;

  pageNumber > 1 &&
    items.push(
      <Pagination.First
        key="first"
        onClick={() => {
          navigate(`?page=1`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />,
      <Pagination.Prev
        key="prev"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(`?page=${pageNumber - 1}`);
        }}
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

  pageNumber < 6 &&
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(`?page=${Number(pageNumber) + 1}`);
        }}
      />,
      <Pagination.Last
        key="last"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(`?page=${totalPages}`)
        }}
      />
    );

  return (
    <div className="d-flex justify-content-center align-item-center mt-3 mb-4">
      <Pagination className={styles.pagination} size="md">
        {items}
      </Pagination>
    </div>
  );
};
