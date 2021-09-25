import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from './redux/modules/user';
import { useHistory } from 'react-router-dom';

const Start = (props) => {
  const user_name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const history = useHistory();
  const name = React.useRef('');

  const saveName = () => {
    const inputName = name.current.value;

    if (user_name === inputName) {
      alert('이름이 중복됩니다.');
      return null;
    }
    dispatch(setName(inputName));
    history.push('/quiz');
  };

  return (
    <StartWrap>
      <Title>당신의 이름을 적어주세요</Title>
      <InputWrap>
        <Input type='text' ref={name} />
        <Button onClick={saveName}>퀴즈 풀기</Button>
      </InputWrap>
    </StartWrap>
  );
};

export default Start;

const StartWrap = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 25px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 60px 0 20px 0;
  border: 1px solid #333;
  border-radius: 30px;
  padding: 10px;
  outline: none;
  font-size: 15px;
`;

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 10px;
  background-color: #208be6;
  color: #fefefe;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #638dbf;
  }
`;
