import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "아이린",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "김상두",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "강민경",
    comment: "안녕하세요, 소플입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
