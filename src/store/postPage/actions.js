import axios from "axios";
import { API_URL } from "../../config.js";

export function startLoadingPost(loadingState) {
  return {
    type: "LOADING",
    payload: loadingState,
  };
}

export function postFullyFetched(posts) {
  return {
    type: "DISPLAY_POST",
    payload: posts,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost(true));

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    dispatch(startLoadingPost(false));

    console.log("responses", postResponse, commentsResponse);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
