import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducerFeed.js";
import postPageSliceReducer from "./postPage/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
