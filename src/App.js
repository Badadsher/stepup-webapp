import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import CenterSection from "./components/CenterSection/CenterSection";
import DownSection from "./components/DownSections/DownSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CenterSection></CenterSection>
      <DownSection></DownSection>
    </div>
  );
}

export default App;
