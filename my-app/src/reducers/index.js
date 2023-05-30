/** root reducer */
import { combineReducers } from "redux";
import counter from "./count";
import colorAction from './changeColor'

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드.
// store에 저장되는 리듀서는 오직 1개
const rootReducer = combineReducers({
  counter,
  colorAction
});

export default rootReducer;