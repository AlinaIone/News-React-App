import React from "react";
import Container from "react-bootstrap/esm/Container";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { useAxios } from "../utils/hooks/useAxios";

export const Home = () => {
  // Create the endoint
  const techEndpoint = getNewsCategoriesEndpoint("technology", 1, 10);
  // Call the endpoind created
  const techData = useAxios(techEndpoint);

  const musicEndpoint = getNewsCategoriesEndpoint("music", 1, 10);
  const musicData = useAxios(musicEndpoint);

  const scienceEndpoint = getNewsCategoriesEndpoint("science", 1, 10);
  const scienceData = useAxios(scienceEndpoint);

  console.log(techData);
  console.log(musicData);
  console.log(scienceData);

  return (
    <Layout>
      <section className="tech">
        <Container>
          <h1>Tech</h1>
        </Container>
      </section>

      <section className="music">
        <Container>
          <h1>Music</h1>
        </Container>
      </section>

      <section className="sience">
        <Container>
          <h1>Sience</h1>
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
