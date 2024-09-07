import React from "react";
import "../PopupLanguage/language.css";
import close from "../images/popup/clos.png";
import rus from "../images/popup/russia.png";
import usa from "../images/popup/usa.png";
import arm from "../images/armenia.png";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hoocks/use-localstorage";
import i18n from "../../i18n";
const Popup = ({
  active,
  setActive,
  langIcon,
  setLangIcon,
  ruIcon,
  enIcon,
  armenIcon,
}) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");

  const changeLang = (lang) => {
    if (lang === "en") {
      i18n.changeLanguage("en");
      setLanguage("en");
      setLangIcon(enIcon);
    } else if (lang === "ru") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
      setLangIcon(ruIcon);
    } else if (lang === "arm") {
      i18n.changeLanguage("arm");
      setLanguage("arm");
      setLangIcon(armenIcon);
    }
  };

  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popHead">
        <a></a>
        <a>{t("chooselang")}</a>
        <button onClick={() => setActive(false)}>
          <img src={close}></img>
        </button>
      </div>
      <div className="popBtns">
        <button onClick={() => changeLang("ru")}>
          <img src={rus}></img>
        </button>
        <button onClick={() => changeLang("en")}>
          <img src={usa}></img>
        </button>
        <button onClick={() => changeLang("arm")}>
          <img src={arm}></img>
        </button>
      </div>
    </div>
  );
};
export default Popup;
