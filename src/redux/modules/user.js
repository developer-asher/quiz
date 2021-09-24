// bucket.js

// Actions
// 프로젝트이름/모듈명/어떤 액션인지 - 액션 타입 지정
const SET_NAME = 'user/SET_NAME';

// 초기값
const initialState = {
  name: '',
};

// Action Creators 액션을 만다는 함수
export function setName(user) {
  return { type: SET_NAME, user: user };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'user/SET_NAME': {
      const user_name = action.user;

      console.log(user_name);
      return { name: user_name };
    }

    // do reducer stuff
    default:
      return state;
  }
}
