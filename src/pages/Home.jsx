import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { adaptNewsData } from "../api/adapters";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { useAxios } from "../utils/hooks/useAxios";
import styles from "./Home.module.css";

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
      <section className="tech my-5">
        <Container>
          <h1 className="mb-4 pt-3">Tech</h1>
          <NewsCardList newsList={techNewsList} />
          <Link to="/category/technology" className={`text-secondary ${styles.moreNews}`}>
            <span> See all the TECH news.</span>
          </Link>
          <hr />
        </Container>
      </section>

      <section className="music my-5">
        <Container>
          <h1 className="mb-4 pt-3">Music</h1>
          <NewsCardList newsList={musicNewsList} />

          <Link to="/category/music" className={`text-secondary ${styles.moreNews}`}>
            <span> See all the MUSIC news.</span>
          </Link>
          <hr />
        </Container>
      </section>

      <section className="sience my-5">
        <Container>
          <h1 className="mb-4 pt-3">Sience</h1>
          <NewsCardList newsList={scienceNewsList} />
          <Link to="/category/science" className={`text-secondary ${styles.moreNews}`}>
            <span> See all the SCIENCE news.</span>
          </Link>
        </Container>
      </section>

      <section className="favorites my-5">
        <Container>
          <Link to="/favorites" className={`text-secondary ${styles.moreNews}`}>
            <span> {`>>  Go to the FAVORITES to find your added news <<`}</span>
          </Link>
        </Container>
      </section>
    </Layout>
  );
};
