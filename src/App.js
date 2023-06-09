import Main from "./page/Main";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MoviesDesc from "./components/MoviesDesc";
import { useLocation } from "react-router-dom";
import MoviesInfo from "./components/MoviesInfo";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/Zindex";

function App() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [moviePage, setMoviePage] = useState(true);
  const sortHeader = useLocation();

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  const handleSignUp = () => {
    setSignUp((prev) => !prev);
  };
  const scrollYevent = () => {
    if (window.scrollY <= 50) {
      setMoviePage(true);
    } else {
      setMoviePage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => scrollYevent());
    return () => {
      window.removeEventListener("scroll", () => scrollYevent());
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header
          login={handleLogin}
          signUp={handleSignUp}
          moviePage={moviePage}
          sortHeader={sortHeader}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies/:id/:rank" element={<MoviesDesc />} />
          <Route path="/movies/:id/overview" element={<MoviesInfo />} />
        </Routes>
        {login && (
          <Modal id="login" ModalSort={handleLogin} ModalData={login} />
        )}
        {signUp && (
          <Modal id="signUp" ModalSort={handleSignUp} ModalData={signUp} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
