
export default function SampleReviewCard ({review}) {


    return (
        <div className="sample-review-card">
            <div className="sample-img-container">
                <img src={review.review_img_url} alt={review.title} className="sample-img"/>
            </div>
            <h3>{review.title}</h3>
            <p className="sample-body">{review.review_body}</p>
            <button>Read more...</button>
        </div>
    )
}