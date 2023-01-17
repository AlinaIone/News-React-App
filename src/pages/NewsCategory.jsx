import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { adaptNewsData } from "../api/adapters";

export const NewsCategory = () => {
  // get the tyoe of the category
  const { categoryType } = useParams();
  // create the url/endpoint for the api
  const newsCategoryUrl = getNewsCategoriesEndpoint(categoryType, 1, 30);
  // call the API with the url created above
  const news = useAxios(newsCategoryUrl);
  // Adapt the data recived from the call to a format needed
  const techNewsList = adaptNewsData(news);

  console.log(categoryType);
  console.log(news);

  return (
    <Layout>
      <Container>
        <h3>{categoryType}</h3>
        <NewsCardList newsList={techNewsList} />
      </Container>
    </Layout>
  );
};
