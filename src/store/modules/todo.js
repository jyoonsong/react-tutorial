import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 앞에 도메인을 붙임으로써 서로 다른 모듈에서도 같은 액션 이름을 사용 가능
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// iinitial id
let id = 0;

// 모듈의 state 초기값 정의
const initialState = Map({
	input: '',
	todos: List() 
});

// reducer function
// 파라미터 handleActions({액션을 처리하는 함수들로 이루어진 object}, 초기 state)
export default handleActions({
	[CHANGE_INPUT]: (state, action) => state.set('input', action.payload), // immutable의 set
  [INSERT]: (state, {payload: text}) => { // 비구조화 할당
  	const item = Map({id: id++, checked: false, text});
    return state.update('todos', todos => todos.push(item)); // immutable의 push
  },
  [TOGGLE]: (state, {payload: id}) => {
		const index = state.get('todos').findIndex(item => item.get('id') === id);
		return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, {payload: id}) => {
		const index = state.get('todos').findIndex(item => item.get('id') === id);
		return state.deleteIn(['todos', index]);
  }
}, initialState)