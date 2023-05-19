import "./App.css";
import Main from "./page/Main";
import Modal from "./components/Modal";
import { DATA } from "./assets/Data";
import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  return (
    <>
      <Header login={handleLogin} />
      <Main data={DATA} />
      {login && <Modal login={handleLogin} isLogin={login} />}
    </>
  );
}

export default App;
