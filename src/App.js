import "./App.css";
import Main from "./page/Main";
import Modal from "./components/Modal";
import { DATA } from "./assets/Data";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  return (
    <>
      <BackgroundModel props={login}>
        <Main login={handleLogin} state={login} />
        {login && <Modal />}
      </BackgroundModel>
    </>
  );
}

export default App;

const BackgroundModel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.props ? "rgba(0, 0, 0, 0.3)" : "white"};
`;
