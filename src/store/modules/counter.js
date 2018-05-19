import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT'; // 앞에 도메인을 붙임으로써 서로 다른 모듈에서도 같은 액션 이름을 사용 가능
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 state 초기값 정의
const initialState = {
	number: 0
};

// reducer function
// 파라미터 handleActions({액션을 처리하는 함수들로 이루어진 object}, 초기 state)
export default handleActions({
  [INCREMENT]: (state, action) => { // 정통 문법
    return { number: state.number + 1 };
  },
  [DECREMENT]: ({ number }) => ({ number: number - 1 }) // 비구조화 할당 + action 참조하지 않으면 생략
}, initialState)