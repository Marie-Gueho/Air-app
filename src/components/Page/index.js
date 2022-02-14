import { useState } from "react";

import Header from "../Header";
import Content from "../Content";
import Button from "../Button";

import "./style.css";

function Page({ theme, className }) {
  const [themeDisplay, setThemeDisplay] = useState("hidden"); // theme
  const [displayContent, setDisplayContent] = useState("hidden"); // audio container
  const [displayHeader, setDisplayHeader] = useState(""); // full header
  const [btnDisplay, setBtnDisplay] = useState("hidden"); // button

  const changeDisplayState = (hook, setHook) => {
    hook === "hidden" ? setHook("") : setHook("hidden");
  };

  return (
    <section
      className={`section-theme theme-${theme} theme-${theme}-${className}`}
      id={theme}
    >
      <Header
        title={theme.split("").splice(1, theme.length - 1)}
        onClickTitle={() => {
          changeDisplayState(themeDisplay, setThemeDisplay);
          changeDisplayState(btnDisplay, setBtnDisplay);
        }}
        themeDisplay={themeDisplay}
        headerDisplay={displayHeader}
      />

      <Content display={displayContent} theme={theme} />
      <Button
        contentStatusChange={() =>
          changeDisplayState(displayContent, setDisplayContent)
        }
        btnStatus={btnDisplay}
        headerDisplay={() => {
          changeDisplayState(displayHeader, setDisplayHeader);
          changeDisplayState(themeDisplay, setThemeDisplay);
        }}
        hideButton={() => setBtnDisplay("hidden")}
        hideTheme={() => setThemeDisplay("hidden")}
      />
    </section>
  );
}

export default Page;
