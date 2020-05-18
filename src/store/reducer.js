import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducerFeed.js";

const reducer = combineReducers({
  feed: feedSliceReducer,
});

export default reducer;
