import { useState } from "react";

import "./style.css";

function Button({
  contentStatusChange,
  btnStatus,
  headerDisplay,
  hideButton,
  hideTheme,
}) {
  const [btnContent, setBtnContent] = useState("START");

  const changeContent = () => {
    btnContent === "START" ? setBtnContent("BACK") : setBtnContent("START");
  };

  return (
    <button
      className={
        btnContent === "START"
          ? `${btnStatus} button button-start`
          : `${btnStatus} button button-back`
      }
      type="button"
      onClick={() => {
        changeContent();
        contentStatusChange();
        headerDisplay();
        if (btnContent === "BACK") {
          hideButton();
          hideTheme();
        }
      }}
    >
      {btnContent}
    </button>
  );
}

export default Button;
