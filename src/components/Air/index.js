import { useState } from "react";
import { Pagination } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";

import "../../reset.css";
import "./style.css";

import Menu from "../Menu";
import Page from "../Page";
import { Routes, Route } from "react-router-dom";

function Air() {
  const [currentPage, setCurrentPage] = useState(null);
  const [darkTheme, setDarkTheme] = useState("");

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const changeTheme = () => {
    if (darkTheme === "") {
      setDarkTheme("dark");
    } else {
      setDarkTheme("");
    }
  };

  return (
    <div className="Air">
      <Menu darkMode={() => changeTheme()} />
      <Pagination className="pagination-menu" size="lg">
        <Pagination.Item
          className={currentPage === 0 ? "active" : ""}
          key={0}
          onClick={() => handlePageChange(0)}
        >
          Respiration
        </Pagination.Item>
        <Pagination.Item
          className={currentPage === 1 ? "active" : ""}
          key={1}
          onClick={() => handlePageChange(1)}
        >
          Relaxation
        </Pagination.Item>
        <Pagination.Item
          className={currentPage === 2 ? "active" : ""}
          key={2}
          onClick={() => handlePageChange(2)}
        >
          Revitalisation
        </Pagination.Item>
      </Pagination>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
              >
                <Page theme="respiration" className={darkTheme} />
                <Page theme="relaxation" className={darkTheme} />
                <Page theme="revitalisation" className={darkTheme} />
              </ReactPageScroller>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Air;
