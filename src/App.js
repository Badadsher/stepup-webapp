import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import CenterSection from "./components/CenterSection/CenterSection";
import DownSection from "./components/DownSections/DownSection";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import nikePage from "./components/brendpages/nikepg/nikePage";
import adidasPage from "./components/brendpages/adidaspg/adidasPage";
import asicsPage from "./components/brendpages/asicspg/asicsPage";
import conversePage from "./components/brendpages/coversepg/conversePage";
import jordanPage from "./components/brendpages/jordanpg/jordanPage";
import nbPage from "./components/brendpages/nbpg/nbPage";
import pumaPage from "./components/brendpages/pumapg/pumaPage";
import vansPage from "./components/brendpages/vanspg/vansPage";

import Brands from "./components/Brands/Brands";
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hoocks/use-localstorage";

function App() {
  const location = useLocation();
  const isRouteActive = ["/brands", "/nike", "/adidas"].includes(
    location.pathname
  );
  return (
    <div className="App">
      {!isRouteActive && (
        <>
          <Header />
          <CenterSection />
          <DownSection />
        </>
      )}

      <Routes>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/nike" element={<nikePage />}>
          {" "}
        </Route>
        <Route path="/adidas" element={<adidasPage />}>
          {" "}
        </Route>
        <Route path="/asics" element={<asicsPage />}>
          {" "}
        </Route>
        <Route path="/converse" element={<conversePage />}>
          {" "}
        </Route>
        <Route path="/jordan" element={<jordanPage />}>
          {" "}
        </Route>
        <Route path="/nb" element={<nbPage />}>
          {" "}
        </Route>
        <Route path="/puma" element={<pumaPage />}>
          {" "}
        </Route>
        <Route path="/vans" element={<vansPage />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
