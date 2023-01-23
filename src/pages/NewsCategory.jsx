import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { adaptNewsData } from "../api/adapters";
import { NewsPagination } from "../components/Pagination";

// review from here
export const NewsCategory = () => {
  const { categoryType } = useParams();
  // read the query string and get the query param 'page' from the URL
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");

  // create the url/endpoint for the api
  const newsCategoryUrl = getNewsCategoriesEndpoint(
    categoryType,
    pageNumber || 1,
    30
  );

  // call the API with the url created above
  const news = useAxios(newsCategoryUrl);
  // Adapt the data recived from the call to a format needed
  const techNewsList = adaptNewsData(news);

  return (
    <Layout>
      <Container>
        <h3>{categoryType.charAt(0).toUpperCase() + categoryType.slice(1)}</h3>
        <NewsCardList newsList={techNewsList} />
        <NewsPagination category={categoryType} pageNumber={pageNumber} />
      </Container>
    </Layout>
  );
};
