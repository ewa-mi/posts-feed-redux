import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducerFeed.js";
import postPageSliceReducer from "./postPage/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  auth: authReducer,
});

export default reducer;
