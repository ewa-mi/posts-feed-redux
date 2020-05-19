const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "LOADING": {
      newState.loading = action.payload;
      break;
    }
    case "DISPLAY_POST": {
      newState.post = action.payload.post;
      newState.comments = action.payload.comments;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
