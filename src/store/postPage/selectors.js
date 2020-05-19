export const selectLoading = (state) => {
  return state.postPage.loading;
};

export const selectPostAndComments = (state) => {
  return {
    post: state.postPage.post,
    comments: state.postPage.comments,
  };
};
