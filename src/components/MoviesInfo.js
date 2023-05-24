import styled from "styled-components";

export default function MoviesInfo() {
  return (
    <>
      <InfoHeader>기본정보</InfoHeader>
    </>
  );
}

const InfoHeader = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  font-size: 17px;
  font-weight: 700;
  padding: 0 16px;
  top: 62px;
  border-bottom: 1px solid rgb(227, 227, 227);
`;
