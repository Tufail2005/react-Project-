import { useState } from "react";
import NavBar from "./components/NavBar";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Main />
      </div>
    </>
  );
}

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
