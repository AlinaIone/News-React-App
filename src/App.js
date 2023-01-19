import { Page404 } from "./pages/Page404";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { NewsCategory } from "./pages/NewsCategory";
import { NewsDetails } from "./pages/NewsDetails";
import { useReducer } from "react";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";
import { FavoritesContext } from "./store/Favorites/context";

function App() {
  const [stateFavorites, dispatchFavorites] = useReducer(
    favoritesReducer,
    initialState
  );

  return (
    <div className="App">
      <FavoritesContext.Provider value={{ stateFavorites, dispatchFavorites }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:categoryType" element={<NewsCategory />} />
          {/* the * means go throught the end of the url  */}
          <Route path="/news/:id*" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}
// encodeURIComponent;

export default App;
