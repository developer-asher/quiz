import Quiz from './Quiz';
import Score from './Score';
import Start from './Start';

import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';
import WantToSay from './WantToSay';

const App = () => {
  return (
    <Container>
      <Route path='/' exact>
        <Start />
      </Route>
      <Route path='/quiz' exact>
        <Quiz />
      </Route>
      <Route path='/score' exact>
        <Score />
      </Route>
      <Route path='/say/:score' exact>
        <WantToSay />
      </Route>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  width: 400px;
  min-height: 500px;
  margin: 40px auto 0 auto;
  border-radius: 30px;
  box-shadow: 1px 1px 7px 1px #ccc;
`;
