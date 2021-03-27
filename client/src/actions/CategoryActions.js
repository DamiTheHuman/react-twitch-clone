import { FETCH_CATEGORIES, FETCH_CATEGORY } from "./types";
import streams from "../apis/streams";
/* Fetches all the available categories*/
export const fetchCategories = () => async (dispatch) => {
  const response = await streams.get("/categories");
  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data,
  });
};
/* Fetches the specified category*/
export const fetchCategory = (id) => async (dispatch) => {
  const response = await streams.get(`/categories/${id}`);
  dispatch({
    type: FETCH_CATEGORY,
    payload: response.data,
  });
};
/* Fetches a category by a title*/
export const fetchCategoryByTitle = (title) => async (dispatch) => {
  const response = await streams.get(`/categories/?title=${title}`);
  dispatch({
    type: FETCH_CATEGORY,
    payload: response.data[0],
  });
};
