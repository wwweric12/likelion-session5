import React from "react";
import styled from "styled-components";

export default function Movie({ item }) {
  const { rank, img, title, year, country, average, percent, audience } = item;

  return (
    <>
      <ImageBox>
        <ImgContainer>
          <RankBox>{rank}</RankBox>
          <MovieImg src={img}></MovieImg>
        </ImgContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieDate>
          {year} ∙ {country}
        </MovieDate>
        <MovieDesc>평균: ★{average}</MovieDesc>
        <MovieDesc>
          예메율:{percent} ∙ 누적관객:{audience}
        </MovieDesc>
      </ImageBox>
    </>
  );
}

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  margin-right: 40px;
  flex: none;
  color: black;
  z-index: -1;
`;

const RankBox = styled.div`
  position: absolute;
  font-weight: 700;
  font-size: 17px;
  opacity: 0.7;
  top: 7px;
  left: 7px;
  width: 30px;
  height: 30px;
  z-index: 10;
  border-radius: 3px;
  background-color: black;
  color: white;
  text-align: center;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

const MovieTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MovieDate = styled.div`
  width: 100%;
  height: 25px;
  font-size: 15px;
  font-weight: 600;
`;

const MovieDesc = styled.div`
  width: 100%;
  height: 25px;
  font-size: 15px;
  font-weight: 600;
  color: gray;
  white-space: pre-wrap;
`;

const ImgContainer = styled.div`
  z-index: -1;
  position: relative;
`;
