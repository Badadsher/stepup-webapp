import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import CenterSection from "./components/CenterSection/CenterSection";
import DownSection from "./components/DownSections/DownSection";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import NikePage from "./components/brendpages/nikepg/nikePage";
import AdidasPage from "./components/brendpages/adidaspg/adidasPage";
import AsicsPage from "./components/brendpages/asicspg/asicsPage";
import ConversePage from "./components/brendpages/coversepg/conversePage";
import JordanPage from "./components/brendpages/jordanpg/jordanPage";
import NbPage from "./components/brendpages/nbpg/nbPage";
import PumaPage from "./components/brendpages/pumapg/pumaPage";
import VansPage from "./components/brendpages/vanspg/vansPage";

import Brands from "./components/Brands/Brands";
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hoocks/use-localstorage";

function App() {
  const location = useLocation();
  const isRouteActive = [
    "/brands",
    "/nike",
    "/adidas",
    "/asics",
    "/converse",
    "/jordan",
    "/nb",
    "/puma",
    "/vans",
  ].includes(location.pathname);
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
        <Route path="/nike" element={<NikePage />}></Route>
        <Route path="/adidas" element={<AdidasPage />}></Route>
        <Route path="/asics" element={<AsicsPage />}></Route>
        <Route path="/converse" element={<ConversePage />}></Route>
        <Route path="/jordan" element={<JordanPage />}></Route>
        <Route path="/nb" element={<NbPage />}></Route>
        <Route path="/puma" element={<PumaPage />}></Route>
        <Route path="/vans" element={<VansPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
