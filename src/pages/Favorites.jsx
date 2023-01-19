import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Layout } from "../components/Layout";
import { NewsCard } from "../components/NewsCard";
import { NewsCardList } from "../components/NewsCardList";
import { FavoritesContext } from "../store/Favorites/context";

// TODO
export const Favorites = () => {
  const { stateFavorites, dispatchFavorites } = useContext(FavoritesContext);
  console.log(stateFavorites.favorites[0].description);

  // TOdo de ce nu apare description
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
