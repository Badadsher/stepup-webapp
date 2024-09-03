import React from "react";
import "../PopupLanguage/language.css";
import close from "../images/popup/clos.png";
import rus from "../images/popup/russia.png";
import usa from "../images/popup/usa.png";
import arm from "../images/armenia.png";
const Popup = ({ active, setActive }) => {
  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popHead">
        <a></a>
        <a>ВЫБЕРИТЕ ЯЗЫК</a>
        <button onClick={() => setActive(false)}>
          <img src={close}></img>
        </button>
      </div>
      <div className="popBtns">
        <button>
          <img src={rus}></img>
        </button>
        <button>
          <img src={usa}></img>
        </button>
        <button>
          <img src={arm}></img>
        </button>
      </div>
    </div>
  );
};
export default Popup;
