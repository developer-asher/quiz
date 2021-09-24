import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from './redux/modules/quiz';
import { useHistory } from 'react-router-dom';

const Quiz = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const quiz_list = useSelector((state) => state.quiz.list);
  const user_answer = useSelector((state) => state.quiz.user_answer);

  const checkAnswer = (event) => {
    const target = event.target;

    if (target.tagName !== 'BUTTON') {
      return false;
    }

    if (target.textContent === 'O') {
      dispatch(addAnswer(true));
    }
    if (target.textContent === 'X') {
      dispatch(addAnswer(false));
    }
  };

  React.useEffect(() => {
    if (user_answer.length === quiz_list.length) {
      history.push('/score');
      return;
    }
  }, [user_answer]);

  // 답변과 질문의 갯수가 같으면 하단의 return 은 실행되지 않음
  if (user_answer.length === quiz_list.length) {
    return null;
  }

  return (
    <QuizWrap>
      <QuizTitle>{quiz_list[user_answer.length].question}</QuizTitle>
      <ButtonWrap onClick={checkAnswer}>
        <Button>O</Button>
        <Button>X</Button>
      </ButtonWrap>
    </QuizWrap>
  );
};

export default Quiz;

const QuizWrap = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
`;

const QuizTitle = styled.p`
  margin-bottom: 100px;
  font-size: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 5px;
  align-self: center;
  background-color: #208be6;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #638dbf;
  }
`;
