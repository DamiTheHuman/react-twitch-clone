import _ from "lodash";
import { FETCH_CATEGORIES, FETCH_CATEGORY } from "../actions/types";
const INITIAL_STATE = {};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_CATEGORY:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
export default categoriesReducer;
