import "./style.css";
import { useState } from "react";
import axios from "axios";
import Contact from "../Contact";

function Menu({ darkMode }) {
  const [modeBtnContent, setModeBtnContent] = useState("Night mode");

  const changeMode = () => {
    modeBtnContent === "Night mode"
      ? setModeBtnContent("Day mode")
      : setModeBtnContent("Night mode");
  };
  const [randomQuote, setRandomQuote] = useState("");
  const getRandom = (min, max) => {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const baseURL = "https://type.fit/api/quotes/";

  const getRandomQuote = () => {
    console.log("button clicked");
    axios
      .get(baseURL)
      .then((res) => {
        const random = getRandom(0, res.data.length);
        setRandomQuote(res.data[random].text);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <nav className="menu">
        <button className="quote-btn" onClick={getRandomQuote}>
          Random quote
        </button>
        <p className="quote">{randomQuote}</p>
        <ul className="menu-list">
          <li>
            <Contact />
          </li>
          <li>
            <button
              onClick={() => {
                darkMode();
                changeMode();
              }}
            >
              {modeBtnContent}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
