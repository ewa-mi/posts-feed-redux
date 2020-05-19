import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>This is post number {id}</h1>
    </div>
  );
}
