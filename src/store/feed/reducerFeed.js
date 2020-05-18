const initialState = {
  loading: true,
  posts: [],
  offset: 1,
};

export default function feedSliceReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "LOADING": {
      newState.loading = action.payload;
      break;
    }

    case "SET_OFFSET": {
      const n = (newState.offset += 5);
      console.log("new state", n);

      break;
    }
    case "SET_POSTS": {
      newState.posts = action.payload;
      break;
    }
    default: {
      // do nothing
    }
  }

  return newState;
}
