import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const Main = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const handlePrev = () => {
    window.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    window.scrollTo({
      left: 1908,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollX <= 10) {
        setShowLeftButton(true);
        setShowRightButton(false);
      } else if (window.scrollX >= 1900) {
        setShowLeftButton(false);
        setShowRightButton(true);
      } else {
        setShowLeftButton(false);
        setShowRightButton(false);
      }
    });
  }, []);

  return (
    <MainContainer>
      <Rank>박스오피스</Rank>
      <PrevButton onClick={handlePrev} item={showLeftButton}>
        ⬅️
      </PrevButton>
      <ImgBox href="#" item={currentIndex}>
        {data.map((item) => {
          return (
            <Movie
              item={item}
              key={item.rank}
              slide={currentIndex}
              setSlide={setCurrentIndex}
            />
          );
        })}
      </ImgBox>
      <NextButton onClick={handleNext} item={showRightButton}>
        ➡️
      </NextButton>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.section`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
`;
const Rank = styled.p`
  width: 100%;
  height: 30px;
  margin: 0 70px;
  font-size: 22px;
  font-weight: 700;
`;

const ImgBox = styled.div`
  height: 800px;
  padding: 30px 50px;
  display: flex;
  text-decoration: none;
`;

const PrevButton = styled.button`
  position: fixed;
  margin-top: 200px;
  z-index: 10;
  left: 10px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid gray;
  display: ${(prop) => (prop.item ? "none" : "inline")};
  &:hover {
    transform: scale(130%);
  }
`;

const NextButton = styled.button`
  position: fixed;
  z-index: 10;
  margin-top: 200px;
  display: ${(prop) => (prop.item ? "none" : "inline")};
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid gray;
  &:hover {
    transform: scale(130%);
  }
`;
