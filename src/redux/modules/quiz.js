// bucket.js

// Actions
// 프로젝트이름/모듈명/어떤 액션인지 - 액션 타입 지정
const ADD_ANSWER = 'quiz/ADD_ANSWER';

// 초기값
const initialState = {
  list: [
    {
      question: '유진수는 과일을 좋아하나요?',
      answer: false,
    },
    {
      question: '유진수는 해산물을 좋아하나요?',
      answer: false,
    },
    {
      question: '유진수는 떡볶이를 좋아하나요?',
      answer: true,
    },
  ],
  user_answer: [],
};

// Action Creators 액션을 만다는 함수
export function addAnswer(answer) {
  return { type: ADD_ANSWER, answer: answer };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'quiz/ADD_ANSWER': {
      const new_user_answer = [...state.user_answer, action.answer];
      console.log(action.answer);
      return { ...state, user_answer: new_user_answer };
    }

    // do reducer stuff
    default:
      return state;
  }
}
