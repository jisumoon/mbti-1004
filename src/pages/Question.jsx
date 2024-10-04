import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
  padding: 8px 16px;
  background: crimson;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > button {
    width: 400px;
    height: 200px;
    font-size: 18px;
  }
  @media screen and (max-width: 780px) {
    flex-direction: column;
    & > button {
      width: 300px;
      height: 150px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    & > button {
      width: 200px;
      height: 100px;
      font-size: 16px;
    }
  }
`;

const Question = () => {
  const [questionNum, SetquestionNum] = useState(0); // 최초는 0에서 시작
  const [totalScore, SettotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 }, // state의 초기값
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  // const handleClickButtonA = (no, type) => {
  //   if (type == "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type == "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type == "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   SetquestionNum(questionNum + 1);
  // };

  // const handleClickButtonB = (no, type) => {
  //   if (type == "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type == "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type == "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   SetquestionNum(questionNum + 1);
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    SettotalScore(newScore);
    if (QuestionData.length !== questionNum + 1) {
      SetquestionNum(questionNum + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      ); //curr : 객체
      navigate({
        pathname: "/result", //동적파라미터
        search: `?${createSearchParams({
          mbti: mbti,
        })}`, // 쿼리스트링값
      });
    }
  };

  return (
    <>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNum / QuestionData.length) * 100}
      />
      <Wrapper>
        <Title>{QuestionData[questionNum].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton(1, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            onClick={() => handleClickButton(0, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;

// 자료의 형태 구조
