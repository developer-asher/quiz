import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Score = (props) => {
  const name = useSelector((state) => state.user.name);
  const quiz_list = useSelector((state) => state.quiz.list);
  const user_answer = useSelector((state) => state.quiz.user_answer);

  const [score, setScore] = React.useState('???');

  const showScore = () => {
    const score_per_question = 100 / quiz_list.length;
    let correct_answer = 0;

    quiz_list.forEach((quiz, index) => {
      if (quiz.answer === user_answer[index]) {
        correct_answer += 1;
      }
    });

    const total_score = Math.ceil(score_per_question * correct_answer);
    setScore(total_score);
  };

  return (
    <ScoreWrap>
      <h2>
        <TargetName>유진수</TargetName>에 대한 퀴즈!
        <br />
        {name}님의 점수는?
        <br />
        <br />
        <QuizScore>{score}</QuizScore>점
      </h2>
      <Desc>
        이 정도면 친한 사이군요!!
        <br />
        앞으로도 더 친하게 지내세요: )
      </Desc>
      <Button onClick={showScore}>점수 보기</Button>
    </ScoreWrap>
  );
};

export default Score;

const ScoreWrap = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
`;

const TargetName = styled.span`
  display: inline-block;
  border-radius: 30px;
  padding: 10px;
  background-color: #ffe065;
`;

const QuizScore = styled.span`
  display: inline-block;
  border-radius: 30px;
  padding: 10px;
  background-color: #ffe065;
  font-size: 30px;
`;

const Desc = styled.p`
  margin: 60px 0 40px 0;
`;

const Button = styled.button`
  width:200px;
  border: none;
  border-radius: 30px;
  padding: 10px;
  background-color: #208be6;
  color: #fefefe;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition:background-color 0.3s ease-in;
  &:hover {
    background-color: #638dbf;
`;
