import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Country from "./Pages/Country";
import Sites from "./Pages/SItes";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:continentId" element={<Country />} />
        <Route path="/country/:countryName" element={<Sites />} />
        <Route path="/sites/:siteName" element={<InfoPage />} />
      </Routes>
    </>
  );
}

export default App;
