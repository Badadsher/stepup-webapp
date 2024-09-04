import React from "react";
import adi from "../images/brends/adi.png";
import asics from "../images/brends/asics.png";
import converse from "../images/brends/converse.png";
import jordan from "../images/brends/jordan.png";
import nb from "../images/brends/nb.png";
import nike from "../images/brends/nike.png";
import puma from "../images/brends/puma.png";
import vans from "../images/brends/vans.png";
import "../Brands/brands.css";
function Brands() {
  return (
    <div className="brands">
      <div className="brands-table">
        <a>ВЫБЕРИТЕ БРЕНД</a>

        <div className="brands-table_buttons">
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={adi}></img>
              </button>
              <a>ADIDAS</a>
            </div>
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={asics}></img>
              </button>
              <a>ASICS</a>
            </div>
          </div>
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={converse}></img>
              </button>
              <a>CONVERSE</a>
            </div>
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={jordan}></img>
              </button>
              <a>JORDAN</a>
            </div>
          </div>
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={nb}></img>
              </button>
              <a>NEW BALANCE</a>
            </div>
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={nike}></img>
              </button>
              <a>NIKE</a>
            </div>
          </div>
          <div className="brands-table_buttons-row">
            <div className="brands-table_buttons-row_BT">
              <button>
                <img src={puma}></img>
              </button>
              <a>PUMA</a>
            </div>

            <div className="brands-table_buttons-row_BT">
              <button>
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
