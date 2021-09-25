import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { initialAnswer } from './redux/modules/quiz';

const Rank = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_name = useSelector((state) => state.user.name);
  const rank_list = useSelector((state) => state.rank.rank);
  const result = rank_list
    .sort((a, b) => {
      if (a.score > b.score) {
        return 1;
      }
      if (a.score < b.score) {
        return -1;
      }
      return 0;
    })
    .reverse(); // 오름차순으로 정률 후 뒤집기

  return (
    <RankWrap>
      <Title>
        <span>{rank_list.length}</span>명의 사람들 중 당신의 등수는?
      </Title>
      <RankList>
        {result.map((item, index) => {
          return (
            <RankItem
              key={index}
              highlight={user_name === item.name ? 'salmon' : 'transparent'}
            >
              <Ranking>{index + 1}등</Ranking>
              <Desc>
                <p>{item.name}</p>
                <p>{item.say}</p>
              </Desc>
            </RankItem>
          );
        })}
      </RankList>
      <Replay
        onClick={() => {
          dispatch(initialAnswer()); //문제에 대한 사용자의 답 초기화
          history.push('/');
        }}
      >
        다시하기
      </Replay>
    </RankWrap>
  );
};

const RankWrap = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
`;

const Title = styled.p``;

const RankList = styled.ul`
  height: 350px;
  max-height: 350px;
  margin: 5px;
  // border: 1px solid #ccc;
  padding-left: 0;
  padding: 10px;
  list-style: none;
  box-sizing: border-box;
  overflow-y: auto;
`;

const RankItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => props.highlight};
`;

const Ranking = styled.h2`
  width: 30%;
  margin: 10px 0;
  border-right: 2px solid #ccc;
  padding: 5px 0;
  align-self: center;
  box-sizing: border-box;
`;

const Desc = styled.div`
  width: 70%;
  padding-left: 15px;
  text-align: left;
  box-sizing: border-box;

  & > p {
    margin: 10px 0;
  }
`;

const Replay = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  background-color: #208be6;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease-in;

  &:hover {
    background-color: #638dbf;
  }
`;

export default Rank;
