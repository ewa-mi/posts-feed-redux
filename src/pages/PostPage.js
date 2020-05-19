import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions.js";
import ReactMarkdown from "react-markdown";
import { selectPostAndComments } from "../store/postPage/selectors.js";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(selectPostAndComments);
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);
  console.log("what is postData", postData);
  return (
    <div>
      <h4>This is post number {id}</h4>
      {!postData.post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postData.post.title}</h1>

          <p className="meta">Author: {postData.post.developer.name}</p>
          <p>
            {postData.post.tags.map((tag) => (
              <span className="tag" key={tag.id}>
                {tag.tag}{" "}
              </span>
            ))}
          </p>
          <ReactMarkdown source={postData.post.content} />

          <h2>Comments</h2>
          {postData.comments.rows.map((row) => (
            <div key={row.id}>
              <p>
                {row.text} // {row.developer.name}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
