import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import CenterSection from "./components/CenterSection/CenterSection";
import DownSection from "./components/DownSections/DownSection";
import { Route, Routes, Link } from "react-router-dom";
import Nike from "./components/Nike/Nike";
import Adidas from "./components/Adidas/Adidas";
import Brands from "./components/Brands/Brands";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CenterSection></CenterSection>
      <DownSection></DownSection>

      <Routes>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/nike" element={<Nike />} />
        <Route path="/adidas" element={<Adidas />} />
      </Routes>
    </div>
  );
}

export default App;
