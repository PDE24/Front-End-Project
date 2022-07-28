import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";

export default function CommentForm({ setComments, comments }) {
  const { review_id } = useParams();
  const { user } = useContext(UserContext);

  const [commentBody, setCommentBody] = useState("");

  const newComment = {
    author: user.username,
    body: commentBody,
    created_at: String(new Date()),
    votes: 0,
  };

  const commentToPost = {
    username: user.username,
    body: commentBody,
  };

  function submitComment(e) {
    e.preventDefault();
    axios.post(
      `https://pde-games.herokuapp.com/api/reviews/${review_id}/comments`,
      commentToPost
    );
    setComments([...comments, newComment]);
  }

  return (
    <div className="add-comment-form">
      <form onSubmit={(e) => submitComment(e)}>
        <div className="add-label">
          <label htmlFor="comment">Add a new comment...</label>
        </div>
        <textarea
          required={true}
          value={commentBody}
          minLength={"2"}
          id="comment"
          onChange={(e) => {
            setCommentBody(e.target.value);
          }}
        ></textarea>
        <button className="button">Post comment</button>
      </form>
    </div>
  );
}
