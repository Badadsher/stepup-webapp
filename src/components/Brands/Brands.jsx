import React from "react";
import adi from "../images/brends/adi.png";
import asics from "../images/brends/asics.png";
import converse from "../images/brends/converse.png";
import jordan from "../images/brends/jordan.png";
import nb from "../images/brends/nb.png";
import nike from "../images/brends/nike.png";
import puma from "../images/brends/puma.png";
import vans from "../images/brends/vans.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hoocks/use-localstorage";
import i18n from "../../i18n";
import close from "../images/popup/clos.png";
import "../Brands/brands.css";
function Brands() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");
  const navigate = useNavigate();
  let teleportFunc = (page) => {
    if (page === "main") {
      navigate("/");
    } else if (page === "adidas") {
      navigate("/adidas");
    } else if (page === "asics") {
      navigate("/asics");
    } else if (page === "converse") {
      navigate("/converse");
    } else if (page === "jordan") {
      navigate("/jordan");
    } else if (page === "nb") {
      navigate("/nb");
    } else if (page === "nike") {
      navigate("/nike");
    } else if (page === "puma") {
      navigate("/puma");
    } else if (page === "vans") {
      navigate("/vans");
    }
  };

  return (
    <div className="brands">
      <div className="brands-table">
        <div className="brands-table-top">
          <a></a>
          <a> {t("choosebrand")}</a>
          <button onClick={() => teleportFunc("main")}>
            <img src={close}></img>
          </button>
        </div>

        <div className="brands-table_buttons">
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button onClick={() => teleportFunc("adidas")}>
                <img src={adi}></img>
              </button>
              <a>ADIDAS</a>
            </div>
            <div className="brands-table_buttons-row_BT">
              <button id="asics" onClick={() => teleportFunc("asics")}>
                <img src={asics}></img>
              </button>
              <a>ASICS</a>
            </div>
          </div>
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button onClick={() => teleportFunc("converse")}>
                <img src={converse}></img>
              </button>
              <a>CONVERSE</a>
            </div>
            <div className="brands-table_buttons-row_BT">
              <button id="jordan" onClick={() => teleportFunc("jordan")}>
                <img src={jordan}></img>
              </button>
              <a>JORDAN</a>
            </div>
          </div>
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button id="nbes" onClick={() => teleportFunc("nb")}>
                <img src={nb}></img>
              </button>
              <a>NEW BALANCE</a>
            </div>
            <div className="brands-table_buttons-row_BT">
              <button id="nike" onClick={() => teleportFunc("nike")}>
                <img src={nike}></img>
              </button>
              <a>NIKE</a>
            </div>
          </div>
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button id="puma" onClick={() => teleportFunc("puma")}>
                <img src={puma}></img>
              </button>
              <a>PUMA</a>
            </div>

            <div className="brands-table_buttons-row_BT">
              <button id="vans" onClick={() => teleportFunc("vans")}>
                <img src={vans}></img>
              </button>
              <a>VANS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
