import './VoteButton.css';
import uVote from '../../images/up-vote.png';
import dVote from '../../images/down-vote.png';

import axios from "axios";
import { useState } from "react";

export default function VoteButtons({ id, review, setReview }) {
  const increaseVote = { inc_votes: 1 };
  const downVote = { inc_votes: -1 };
  const [voted, setVoted] = useState(false);
  const [err, setErr] = useState(false);

  function vote(vote) {
    axios
      .patch(`https://pde-games.herokuapp.com/api/reviews/${id}`, vote)
      .then((res) => {
        setReview(res.data.review);
        setVoted(true);
      })
      .catch((err) => {
        setErr(true);
      });
  }

  if (err) return <p>Error</p>;

  if (voted) {
    
  }

  return (
    <>
      <button
        className="arrow-button-green"
        onClick={() => {
          vote(increaseVote);
        }}
      >
        +1
      </button>
      <button
        className="arrow-button-red"
        onClick={() => {
          vote(downVote);
        }}
      >
        -1
      </button>
    </>
  );
}
