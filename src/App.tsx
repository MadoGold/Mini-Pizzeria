import React from "react";
import { Routes, Route } from "react-router-dom";
// https://63129812f5cba498da9490a8.mockapi.io/items
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import FullPizza from "./pages/FullPizza";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
