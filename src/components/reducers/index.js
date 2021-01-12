import { combineReducers } from "redux";
import ArticleReducer from "./reducer_article";
import PostLoginReducer from "./reducer_login";
import PostRegisterReducer from "./reducer_register";
import UIDataReducer from "./reducer_ui_data";
const APIReducer = combineReducers({
  article: ArticleReducer,
  login: PostLoginReducer,
  register: PostRegisterReducer,
  uiData: UIDataReducer,
});

export default APIReducer;
