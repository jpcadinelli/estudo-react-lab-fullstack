import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import CatalogoPage from './page/CatalogoPage'

function App() {

  return (
    <Routes>
        <Route path="/" element={<CatalogoPage />} />
    </Routes>
  )
}

export default App
