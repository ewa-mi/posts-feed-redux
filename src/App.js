import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PostsFeed from "./pages/PostsFeed";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route exact path="/">
          <PostsFeed />
        </Route>
      </Switch>
    </div>
  );
}
