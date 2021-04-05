import React from "react";

const Post = (porps) => {
  return (
    <div>
      <div>{porps.message}</div>
      <div>likes {porps.likesCount}</div>
    </div>
  );
};

export default Post;
