export const selectLoading = (state) => {
  return state.feed.loading;
};

export const selectPosts = (state) => {
  return state.feed.posts;
};

export const selectOffset = (state) => {
  return state.feed.offset;
};
