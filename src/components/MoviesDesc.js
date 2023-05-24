import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function MoviesDesc({ data }) {
  const params = useParams();
  const movie = data.filter((item) => item.rank === Number(params.id))[0];

  return (
    <MoviesPage>
      <ContentBox>
        <ImageBox>
          <ImageLeftBox color={movie.left}></ImageLeftBox>
          <BackgroundMovieImg src={movie.image}></BackgroundMovieImg>
          <ImageRightBox color={movie.right}></ImageRightBox>
        </ImageBox>
        <ImgBackground />

        <MovieProfile>
          <MovieRank>
            예메순위:
            <span>
              {movie.rank}위 ({movie.percent})
            </span>
          </MovieRank>
          <MovieAudience>
            누적관객:<span>{movie.audience}</span>
          </MovieAudience>
        </MovieProfile>
      </ContentBox>
      <MovieImage src={movie.img}></MovieImage>
      <MovieDesc>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDetail>
          {movie.year} ・ {movie.genre} ・ {movie.country}
        </MovieDetail>
        <MovieRating>평균 ★ {movie.average}</MovieRating>
        <MovieActionBox>
          <MovieStarBox>
            평가하기
            <MovieStar>✩✩✩✩✩</MovieStar>
          </MovieStarBox>
          <MovieLine></MovieLine>
          <MovieButtonBox>
            <MovieButton>✚ 보고싶어요</MovieButton>
            <MovieButton>✏️ 코맨트</MovieButton>
            <MovieButton>👁️ 보는중</MovieButton>
            <MovieButton>・・・ 더보기</MovieButton>
          </MovieButtonBox>
        </MovieActionBox>
      </MovieDesc>
      <MovieSection>
        <MovieInfo>
          <MovieInfoHeader>
            <InfoTitle>기본정보</InfoTitle>
            <Link to={`/movies/${movie.rank}/overview`}>
              <MoreButton>더보기</MoreButton>
            </Link>
          </MovieInfoHeader>
          <DescDetails>
            <DescTitle>{movie.originalTitle}</DescTitle>
            <DescDetail>
              {movie.year} ・ {movie.genre} ・ {movie.country}
            </DescDetail>
            <DescTime>
              {movie.runningTime} ・ {movie.age}
            </DescTime>
            <DescContent>{movie.description}</DescContent>
          </DescDetails>
        </MovieInfo>
      </MovieSection>
    </MoviesPage>
  );
}

const MoviesPage = styled.section`
  width: 100%;
  height: 100vh;
`;

const ContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: black;
`;

const ImgBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    -180deg,
    rgba(20, 20, 20, 0.3) 1%,
    rgba(20, 20, 20, 0.5) 67%,
    #141414 98%
  );
  z-index: 2;
`;

const ImageBox = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundMovieImg = styled.img`
  height: 400px;
  width: 100%;
`;

const ImageLeftBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 110px;

  background-image: ${(props) => props.color};
`;
const ImageRightBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 110px;
  background-image: ${(props) => props.color};
`;

const MovieProfile = styled.ul`
  display: flex;
  width: 100%;
  height: 33px;
  z-index: 5;
  color: white;
  list-style: none;
  font-size: 14px;
`;

const MovieRank = styled.li`
  color: rgba(255, 255, 255, 0.5);
  margin-left: 550px;
  margin-right: 50px;
  span {
    color: white;
  }
`;
const MovieAudience = styled.li`
  color: rgba(255, 255, 255, 0.5);
  span {
    color: white;
  }
`;

const MovieImage = styled.img`
  width: 153px;
  height: 221px;
  border: 1px solid white;
  border-radius: 3px;
  position: absolute;
  top: 370px;
  left: 230px;
  z-index: 2;
`;

const MovieDesc = styled.div`
  width: 100%;
  height: 250px;
  padding-left: 400px;
`;

const MovieTitle = styled.div`
  width: 100%;
  height: 33px;
  font-size: 25px;
  font-weight: 700;
  margin-top: 30px;
`;

const MovieDetail = styled.div`
  width: 100%;
  height: 20px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 400;
  margin-top: 3px;
`;

const MovieRating = styled.div`
  width: 100%;
  margin-top: 14px;
  padding: 9px 0;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: left;
`;

const MovieActionBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  height: 80px;
`;
const MovieStarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 51px;
  color: #787878;
`;
const MovieStar = styled.div`
  font-size: 50px;
`;
const MovieLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ededed;
  margin: 0 50px;
`;
const MovieButtonBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MovieButton = styled.button`
  width: 100px;
  text-align: center;
  background-color: transparent;
  border: none;
  margin-right: 20px;
  font-size: 14px;
  line-height: 14px;
  transition: all 200ms ease-in;
  :hover {
    font-size: 18px;
  }
`;
const MovieSection = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #f8f8f8;
  border-top: 1px solid #ededed;
  padding: 50px 100px;
`;

const MovieInfo = styled.div`
  width: 730px;
  height: 400px;
  padding: 8px 30px;
  background-color: white;
  border-radius: 3px;
`;

const MovieInfoHeader = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoTitle = styled.h2`
  font-size: 20px;
  margin-left: 30px;
`;

const MoreButton = styled.button`
  margin-right: 30px;
  background-color: transparent;
  border: none;
  color: #ff2f6e;
  font-size: 15px;
`;
const DescDetails = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  font-size: 15px;
`;
const DescTitle = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const DescDetail = styled.div`
  margin-top: 10px;
`;
const DescTime = styled.div`
  margin-top: 10px;
`;
const DescContent = styled.div`
  margin-top: 20px;
`;
