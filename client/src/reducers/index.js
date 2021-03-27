import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import streamsReducer from "./streamsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  categories: categoriesReducer,
  users: usersReducer,
  streams: streamsReducer,
});
