import _ from "lodash";
import { FETCH_USERS, FETCH_USER } from "../actions/types";
const INITIAL_STATE = {};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_USER:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
export default usersReducer;
