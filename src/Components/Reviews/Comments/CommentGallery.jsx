import "./Comment.css";

import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function CommentGallery({ id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pde-games.herokuapp.com/api/reviews/${id}/comments`)
      .then((res) => {
        setComments(res.data.comments);
      });
  }, [id]);

  return (
    <div className="comment-gallery">
      <h2>Comments</h2>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
      <div className="add-comment">
        <button
          className="button"
          onClick={() => {
            setNewComment(!newComment);
          }}
        >
          Add Comment
        </button>
        {newComment ? (
          <CommentForm />
        ) : (
          null
        )}
      </div>
    </div>
  );
}
