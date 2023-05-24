import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Movie from "../components/Movie";
import axios from "axios";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [data, setData] = useState([]);

  const handlePrev = () => {
    window.scrollTo({
      left: window.scrollX - 1408,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    window.scrollTo({
      left: window.scrollX + 1408,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollX <= 10) {
        setShowLeftButton(true);
        setShowRightButton(false);
      } else if (window.scrollX >= 4200) {
        setShowLeftButton(false);
        setShowRightButton(true);
      } else {
        setShowLeftButton(false);
        setShowRightButton(false);
      }
    });

    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => setData(response.data.results));
  }, []);

  return (
    <MainContainer>
      <Rank>박스오피스</Rank>
      <PrevButton onClick={handlePrev} item={showLeftButton}>
        ⬅️
      </PrevButton>
      <ImgBox href="#" item={currentIndex}>
        {data.map((item, index) => {
          return (
            <Link
              to={`/movies/${item.id}/${index + 1}`}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <Movie
                item={item}
                rank={index}
                slide={currentIndex}
                setSlide={setCurrentIndex}
              />
            </Link>
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
  z-index: ${({ theme }) => theme.Zindex.toAbove};
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
  z-index: ${({ theme }) => theme.Zindex.toAbove};
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
