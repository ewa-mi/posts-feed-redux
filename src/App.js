import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import PostsFeed from "./pages/PostsFeed";

export default function App() {
  return (
    <div>
      <Switch>
        <Route component={PostsFeed} />
      </Switch>
    </div>
  );
}
