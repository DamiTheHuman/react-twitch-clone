import { FETCH_USERS, FETCH_USER } from "./types";
import streams from "../apis/streams";
/* Fetches all the available users*/
export const fetchUsers = () => async (dispatch) => {
  const response = await streams.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: response.data,
  });
};
/* Fetches the specified user*/
export const fetchUser = (id) => async (dispatch) => {
  const response = await streams.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};
