import "./App.css";
import Main from "./page/Main";
import Modal from "./components/Modal";
import { DATA } from "./assets/Data";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MoviesDesc from "./components/MoviesDesc";
import { useLocation } from "react-router-dom";
import MoviesInfo from "./components/MoviesInfo";

function App() {
  const [login, setLogin] = useState(false);
  const [moviePage, setMoviePage] = useState(true);
  const sortHeader = useLocation();
  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 50) {
        setMoviePage(true);
      } else {
        setMoviePage(false);
      }
    });
  }, []);
  return (
    <>
      <Header
        login={handleLogin}
        moviePage={moviePage}
        sortHeader={sortHeader}
      />
      <Routes>
        <Route path="/" element={<Main data={DATA} />} />
        <Route path="/movies/:id" element={<MoviesDesc data={DATA} />} />
        <Route path="/movies/:id/overview" element={<MoviesInfo />} />
      </Routes>
      {login && <Modal login={handleLogin} isLogin={login} />}
    </>
  );
}

export default App;
