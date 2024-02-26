import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <>
      <h1>Greetings of the Day</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;