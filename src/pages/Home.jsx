import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { adaptNewsData } from "../api/adapters";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { useAxios } from "../utils/hooks/useAxios";

export const Home = () => {
  // Create the endoint
  const techEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  // Call the endpoind created above
  const techDataFromUrl = useAxios(techEndpoint);
  // Adapt the data recived from the call to a useful format
  const techNewsList = adaptNewsData(techDataFromUrl);

  const musicEndpoint = getNewsCategoriesEndpoint("music", 1, 6);
  const musicNewsList = adaptNewsData(useAxios(musicEndpoint));

  const scienceEndpoint = getNewsCategoriesEndpoint("science", 1, 6);
  const scienceNewsList = adaptNewsData(useAxios(scienceEndpoint));

  console.log(techNewsList);
  console.log(musicNewsList);
  console.log(scienceNewsList);

  return (
    <Layout>
      <section className="tech">
        <Container>
          <h1>Tech</h1>
          <NewsCardList newsList={techNewsList} />
        </Container>
      </section>

      <section className="music">
        <Container>
          <h1>Music</h1>
          <NewsCardList newsList={musicNewsList} />
        </Container>
      </section>

      <section className="sience">
        <Container>
          <h1>Sience</h1>
          <NewsCardList newsList={scienceNewsList} />
        </Container>
      </section>

      <section className="favorites">
        <Container>
          <h1>Favorites</h1>
        </Container>
      </section>
    </Layout>
  );
};
