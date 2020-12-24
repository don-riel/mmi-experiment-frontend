import { combineReducers } from "redux";

import timeReducer from "./time/time.reducers";
import inputReducer from "./input-device/input.reducer";

const rootReducer = combineReducers({
  time: timeReducer, //stores task time results 
  inputDevice: inputReducer //values(mouse, touchpad, touchscreen), serves as a basis when saving data in database
});

export default rootReducer;
