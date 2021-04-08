import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import streamsReducer from "./streamsReducer";
import usersReducer from "./usersReducer";
import userStreamsReducer from "./userStreamsReducer";

export default combineReducers({
  categories: categoriesReducer,
  users: usersReducer,
  streams: streamsReducer,
  userStreams: userStreamsReducer,
});
