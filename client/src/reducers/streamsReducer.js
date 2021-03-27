import _ from "lodash";
import { FETCH_STREAMS, FETCH_STREAM } from "../actions/types";
const INITIAL_STATE = {};

const streamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {
        ...state,
        ..._.mapValues(action.payload, (stream) => {
          return stream;
        }),
      };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
export default streamsReducer;
