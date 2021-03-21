import React from "react";
import post from "./Post.module.css";

const Post = (porps) => {
  return (
    <div>
      <div>{porps.message}</div>
      <div>likes {porps.likesCount}</div>
    </div>
  );
};

export default Post;
