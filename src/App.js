import { Page404 } from "./pages/Page404";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { NewsCategory } from "./pages/NewsCategory";
import { NewsDetails } from "./pages/NewsDetails";
import { useReducer } from "react";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";
import { FavoritesContext } from "./store/Favorites/context";
import { alertReducer, initialAlertState } from "./store/Alert/alertReducer";
import { AlertContext } from "./store/Alert/alertContext";

function App() {
  // Add / remove favorites state (controls the news from favorites)
  const [stateFavorites, dispatchFavorites] = useReducer(favoritesReducer, initialState);
  // The state for alert when user adds news to favorites 
  const [stateAlert, dispatchAlert] = useReducer(alertReducer, initialAlertState);

  return (
    <div className="App">
      <AlertContext.Provider value={{ stateAlert, dispatchAlert }}>
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
      </AlertContext.Provider>
    </div>
  );
}
export default App;
