import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { setRank } from './redux/modules/rank';

const WantToSay = (props) => {
  const history = useHistory();
  const param = useParams();
  const score = parseInt(param.score);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const textRef = useRef(null);

  const goRank = () => {
    const desc = textRef.current.value;
    dispatch(setRank({ name: name, score: score, say: desc }));
    textRef.current.value = '';
    history.push('/rank');
  };

  return (
    <SayWrap>
      <SayTitle>
        <span
          style={{
            display: 'inline-block',
            padding: '10px',
            borderRadius: '30px',
            backgroundColor: '#ffe065',
          }}
        >
          유진수
        </span>{' '}
        에게 남기는 한 마디
      </SayTitle>
      <TextWrap>
        <textarea
          ref={textRef}
          cols='10'
          rows='10'
          placeholder='유진수님에게 남기고 싶은말을 적어주세요.'
        ></textarea>
        <Button onClick={goRank}>남기고 랭킹 보러가기</Button>
      </TextWrap>
    </SayWrap>
  );
};

export default WantToSay;

const SayWrap = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
`;
const SayTitle = styled.h2`
  font-size: 25px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 60px auto 0 auto;
`;

const Button = styled.button`
  align-self: center;
  width:200px;
  margin-top:30px;
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
