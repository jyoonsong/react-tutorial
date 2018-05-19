/*
	store 생성 함수
	store/index.js에서 사용될 것
*/
import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(modules, devTools);

  return store;
}

export default configure;