import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { FavoritesContext } from "../store/Favorites/context";

export const Favorites = () => {
  const { stateFavorites } = useContext(FavoritesContext);

  return (
    <Layout>
      <Container>
        {stateFavorites.favorites.length !== 0 ? (
          <NewsCardList newsList={stateFavorites.favorites} />
        ) : (
          <p>Nothing here</p>
        )}
      </Container>
    </Layout>
  );
};
