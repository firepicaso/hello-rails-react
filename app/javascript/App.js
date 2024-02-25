import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";

const App = () => {
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    // Fetch greetings from your API endpoint
    fetch("/api/v1/greetings")
      .then(response => response.json())
      .then(data => setGreetings(data));
  }, []);

  return (
    <>
      <h1>Hello reviewer</h1>
      <Routes>
        <Route
          path="/"
          element={<Greeting greetings={greetings} />}
        />
      </Routes>
    </>
  );
};

export default App;