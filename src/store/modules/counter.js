import { createAction } from 'redux-actions';

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
export default function reducer(state = initialState, action) { // 디폴트 값 설정 문법
	// reducer는 action type에 따라 변화된 state를 반환
	switch(action.type) {
		case INCREMENT:
			return { number: state.number + 1 };
		case DECREMENT:
			return { number: state.number - 1 };
		default:
			return state; // 아무 일도 일어나지 않으면 현재 상태 그대로 반환 
	}
}