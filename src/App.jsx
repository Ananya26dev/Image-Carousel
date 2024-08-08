import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import { slides } from "./data/carouselData.json";
const App = () => {
  return (
    <div className="app">
      <Carousel data={slides} />
    </div>
  );
};

export default App;
