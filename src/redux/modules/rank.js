// bucket.js

// Actions
// 프로젝트이름/모듈명/어떤 액션인지 - 액션 타입 지정
const ADD_RANK = 'rank/ADD_RANK';

// 초기값
const initialState = {
  rank: [
    {
      name: 'sungmin',
      score: 80,
      say: '사랑해',
    },
    {
      name: 'min',
      score: 75,
      say: '러브러브',
    },
    {
      name: '성민',
      score: 90,
      say: '알라뷰',
    },
  ],
};

// Action Creators 액션을 만다는 함수
export function setRank(rank) {
  return { type: ADD_RANK, rank };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'rank/ADD_RANK': {
      const new_rank = [...state.rank, action.rank];
      console.log(new_rank);
      return { rank: new_rank };
    }

    // do reducer stuff
    default:
      return state;
  }
}
