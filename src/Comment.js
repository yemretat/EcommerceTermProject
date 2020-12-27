import React from "react";
import "./Comment.css";
const Comment = ({ user, comment }) => {
  return (
    <div className="comment">
      <p>
        <strong>{user} : </strong>
        {comment}
      </p>
    </div>
  );
};
export default Comment;
