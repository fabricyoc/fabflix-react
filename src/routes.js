import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";
import Cadastre from "./pages/Cadastre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cadastre" element={<Cadastre />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
