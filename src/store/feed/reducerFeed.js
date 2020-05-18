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
      newState.offset += 5;
      break;
    }
    case "SET_POSTS": {
      newState.posts = [...state.posts, ...action.payload];
      break;
    }
    default: {
      // do nothing
    }
  }

  return newState;
}
