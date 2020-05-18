import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function setLoading(loadingState) {
  return {
    type: "LOADING",
    payload: loadingState,
  };
}

export function setPosts(postsState) {
  return {
    type: "SET_POSTS",
    payload: postsState,
  };
}

export function setOffset() {
  return {
    type: "SET_OFFSET",
  };
}

//thunk?

export async function fetchNext5Posts(dispatch, getState) {
  const state = getState();
  const { feed } = state;
  const { offset } = feed;
  const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  console.log(response);

  const action = setPosts(response);
  // const action = setPosts([...state.feed.posts.data, ]);

  dispatch(action);
}
