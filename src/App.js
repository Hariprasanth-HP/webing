import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Main from "./subj/Main";
import Page from "./subj/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
