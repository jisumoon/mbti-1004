import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css"; // src 폴더 어딘가에는 있어야 bootstrap 사용 가능
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Header = styled.div`
  font-size: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
  padding: 8px 14px;
  background: crimson;
  border-radius: 8px;
  @media screen and (max-width: 780px) {
    width: 300px;
    font-size: 24px;
    padding: 6px 12px;
  }
  @media screen and (max-width: 360px) {
    width: 200px;
    font-size: 18px;
    padding: 4px 8px;
  }
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  padding: 8px 14px;
  background: crimson;
  border-radius: 8px;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>🐱예비 집사 판별기🐱</Header>
      <Contents>
        <Title>나에게 맞는 집사는?</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 😻고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

// 포털 seo
// search engine optimization
// 검색엔진최적화
// 반드시 public에 넣어야한다. reacts는 = > public이 root directroy
// 사이트소유확인
// 로봇 파일 생성
// public 폴더안에 robot.txt
// robot.txt 변환
// rss : 사이트 내 소소한 데이터 변화
// sitemap : 사이트 구조
// 상단 주소를 복사하여
