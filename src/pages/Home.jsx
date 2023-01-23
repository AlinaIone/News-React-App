import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
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
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={techNewsList} />
          <p>
            See all the tech news in the section
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="music my-5">
        <Container>
          <h1 className="mb-5 pt-3">Music</h1>
          <NewsCardList newsList={musicNewsList} />
          <p>
            See all the music news in the section
            <Link to="/category/music" className="text-secondary">
              Music
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="sience my-5">
        <Container>
          <h1 className="mb-5 pt-3">Sience</h1>
          <NewsCardList newsList={scienceNewsList} />
          <p>
            See all the science news in the section
            <Link to="/category/science" className="text-secondary">
              Science
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorites</h1>
          <p>Do you want to save your favorites news for later?</p>
          <p>Find the button on each news. </p>
          <p className="pb-3">
            Go to the{" "}
            <Link to="/favorites" className="text-secodary">
              {" "}
              Favorites
            </Link>
            to find your added news.
          </p>
        </Container>
      </section>
    </Layout>
  );
};
