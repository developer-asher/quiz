import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from './redux/modules/quiz';
import { useHistory } from 'react-router-dom';

const Quiz = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const quiz_list = useSelector((state) => state.quiz.list);
  const user_answer = useSelector((state) => state.quiz.user_answer);

  const checkAnswer = (event) => {
    const target = event.target;

    if (target.tagName !== 'BUTTON') {
      return false;
    }

    if (target.textContent === 'O') {
      dispatch(addAnswer(true));
    } else {
      dispatch(addAnswer(false));
    }
  };

  React.useEffect(() => {
    if (user_answer.length === quiz_list.length) {
      history.push('/score');
      return false;
    }
  }, [user_answer]);

  // 답변과 질문의 갯수가 같으면 하단의 return 은 실행되지 않음
  if (user_answer.length === quiz_list.length) {
    return null;
  }

  return (
    <QuizWrap>
      <Progress>
        <HighLight
          width={(user_answer.length / quiz_list.length) * 100 + '%'}
        />
        <Dot />
      </Progress>
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

const Progress = styled.div`
  display: flex;
  width: 80%;
  height: 10px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #eee;
  transform: translateY(-100px);
  align-items: center;
`;

const HighLight = styled.div`
  width: ${(props) => props.width};
  height: 10px;
  border-radius: 5px;
  background-color: purple;
  transition: width 1s linear;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin-left: -12px;
  border: 4px solid purple;
  border-radius: 50%;
  background-color: #fff;
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
