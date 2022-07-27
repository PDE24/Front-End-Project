export default function CommentForm () {
    return (
        <div className="add-comment-form">
            <form>
                <div className="add-label">
                <label htmlFor="comment" >Add a new comment...</label>
                </div>
                <textarea id="comment"></textarea>
                <button className="button">Post comment</button>
            </form>
          </div>
    )
}