export const selectLoading = (state) => {
  return state.feed.loading;
};

export const selectPosts = (state) => {
  return state.feed.posts.data;
};

export const selectOffset = (state) => {
  return state.feed.offset;
};
