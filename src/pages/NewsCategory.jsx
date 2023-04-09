import React, { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { adaptNewsData } from "../api/adapters";
import { NewsPagination } from "../components/Pagination";
import { AlertContext } from "../store/Alert/alertContext";
import { FavoriteAlert } from "../components/FavoriteAlert";

// review from here
export const NewsCategory = () => {
  // alert state required to display the alert or not
  const { stateAlert } = useContext(AlertContext);
  // news category used to call de API
  const { categoryType } = useParams();
  // read the query string and get the query param 'page' from the URL
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  // create the url/endpoint for the api
  const newsCategoryUrl = getNewsCategoriesEndpoint(categoryType, pageNumber || 1);
  // call the API with the url created above
  const news = useAxios(newsCategoryUrl);
  // adapt the data recived from the call to a format needed
  const newsList = adaptNewsData(news);

  return (
    <Layout>
      <Container>
        <h2 className="mt-5 pt-2 mb-4">{categoryType.charAt(0).toUpperCase() + categoryType.slice(1)}</h2>
        {stateAlert.isActive && <FavoriteAlert />}
        <NewsCardList newsList={newsList} />
        <NewsPagination category={categoryType} pageNumber={pageNumber} />
      </Container>
    </Layout>
  );
};
