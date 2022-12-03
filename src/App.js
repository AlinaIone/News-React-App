import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Page404 } from "./pages/Page404";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { NewsCategory } from "./pages/NewsCategory";
import { NewsDetails } from "./pages/NewsDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:categoryType" element={<NewsCategory />} />
        {/* the * means go throught the end of the url  */}
        <Route path="/news/:newsId*" element={<NewsDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
