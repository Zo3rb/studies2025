import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// Local Imports
import HomePage from "./pages/Home";
import HotelsPage from "./pages/Hotels";
import HotelPage from "./pages/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
