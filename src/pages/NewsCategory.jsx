import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";

export const NewsCategory = () => {
  const { categoryType } = useParams();
  const dataFromCategory = getNewsCategoriesEndpoint(categoryType, 1, 20);
  const news = useAxios(dataFromCategory);

  console.log(news);
  return (
    <Layout>
      <Container>
        <h1>Numele categoriei</h1>
        <p>Parametrul venit din rută: {categoryType}</p>
      </Container>
    </Layout>
  );
};
