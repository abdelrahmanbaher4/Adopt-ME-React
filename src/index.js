import React, { StrictMode, useState } from "react";
import { render } from "react-dom"; //pulling something of react-dom "render" from react-dom , no run time cost
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
const App = () => {
  // not destructring it becasue we are going to pass it to my context
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};
render(<App />, document.querySelector(".root"));
