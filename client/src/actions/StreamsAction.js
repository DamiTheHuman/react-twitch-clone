import { FETCH_STREAMS, FETCH_STREAM } from "./types";
import streams from "../apis/streams";

//Example Queres
/* http://localhost:3001/streams/?_expand=user&_sort=views&_order=desc* Get all streams and users sorted by hieghest views/
/**http://localhost:3001/streams?_expand=user&game=Fortnite -- Get all streams and users playing fortnite */
/**http://localhost:3001/streams/?_expand=user Gets all streams and their users*/
/* http://localhost:3001/streams/1/?_expand=user Gets the user the stream belongs to */

/* Fetches all the available streams*/
export const fetchStreams = (params = "") => async (dispatch) => {
  const response = await streams.get(`/streams/${params}`);
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};
/* Fetches the specified stream*/
export const fetchStream = (id, params = "") => async (dispatch) => {
  const response = await streams.get(`/streams/${id}/${params}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};
