import { FETCH_USER_STREAM } from "./types";
import _ from "lodash";
import streams from "../apis/streams";

/**
 * Fetches the most recent live stream stream belonging to a user
 * */
export const fetchUserStream = (id, params = "") => async (dispatch) => {
  const response = await streams.get(
    `/users?_embed=streams&userName=${id}${params}`
  );
  //Get the users most recent live stream
  var result = response.data.length > 0 ? response.data[0] : null;
  result.liveStream = _.find(result.streams, function (stream) {
    return stream.live;
  });
  dispatch({
    type: FETCH_USER_STREAM,
    payload: result,
  });
};
