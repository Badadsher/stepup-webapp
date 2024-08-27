import React, { useState } from "react";
import "../Header/header.css";
import armenIcon from "../images/armenia.png";
import tgIcon from "../images/tg.png";
function Header() {
  const [toggleState, toggleSetState] = useState(false);

  const toggleLanguagesClick = () => {
    if (toggleState) {
      toggleSetState(false);
      console.log(toggleState);
    } else {
      toggleSetState(true);
      console.log(toggleState);
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <button className="moderbt">
          <img src={tgIcon}></img>
          <a>
            Если не нашли <br />
            нужный товар
          </a>
        </button>
      </div>

      <div className="header-right">
        <img src={armenIcon} onClick={toggleLanguagesClick}></img>
      </div>
    </div>
  );
}

export default Header;
