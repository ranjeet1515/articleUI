import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import APIReducer from "./common/reducers";

const rootReducer = combineReducers({
  apiData: APIReducer,
  user: (state = {}) => state,
  form: formReducer,
});

export default rootReducer;
