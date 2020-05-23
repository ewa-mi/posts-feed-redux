import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PostsFeed from "./pages/PostsFeed";
import PostPage from "./pages/PostPage";
import { useDispatch } from "react-redux";
import { bootstrapLogin } from "./store/auth/actions";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
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
