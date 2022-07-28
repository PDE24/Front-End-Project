import "./Comment.css";
import Loading from "../../../images/loading.gif";

import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function CommentGallery({ id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pde-games.herokuapp.com/api/reviews/${id}/comments`)
      .then((res) => {
        setComments(res.data.comments);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={Loading} alt={"loading page"} className="bar" />
      </div>
    );
  }

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
          <CommentForm setComments={setComments} comments={comments} />
        ) : null}
      </div>
    </div>
  );
}
