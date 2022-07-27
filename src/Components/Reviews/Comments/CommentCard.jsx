import Vote from "../../Votes/Vote";

export default function CommentCard({comment}) {
 
  
    return (
    <div className="comment-card">
      <h4 className="author">From: {comment.author}</h4>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
      <h4 className="date">Date: {comment.created_at}</h4>
      <div className="comment-vote">
        <Vote votes={comment.votes}/>
      </div>
    </div>
  );
}
