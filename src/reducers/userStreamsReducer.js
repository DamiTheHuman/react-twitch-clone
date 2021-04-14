import _ from "lodash";
import { FETCH_USER_STREAM } from "../actions/types";
const INITIAL_STATE = { user: null, currentLiveStream: null };

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_STREAM:
      return { ...state, recentLiveStream: action.payload };
    default:
      return state;
  }
};
export default usersReducer;
