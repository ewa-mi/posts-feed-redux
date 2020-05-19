import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  setLoading,
  setOffset,
  fetchNext5Posts,
} from "../store/feed/actions.js";
import "./PostsFeed.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  selectPosts,
  selectOffset,
} from "../store/feed/selectorsFeed.js";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const posts = useSelector(selectPosts);
  const offset = useSelector(selectOffset);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch, offset]);

  const onButtonClick = () => {
    dispatch(setLoading(true));

    dispatch(setOffset());
  };

  return (
    <>
      {posts.length > 0 && (
        <div className="PostsFeed">
          <h1 className="header">Recent posts</h1>

          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <Link to={`/post/${post.id}`}>read more</Link>
              <p>
                <Moment format="YYYY-MM-DD">{post.createdAt}</Moment>{" "}
                {post.tags.map((tag) => (
                  <span className="tag" key={tag.id}>
                    {tag.tag}{" "}
                  </span>
                ))}
              </p>
            </div>
          ))}
          <button onClick={onButtonClick}>Load more</button>
        </div>
      )}
      {loading && <p>Data is loading</p>}
    </>
  );
}
