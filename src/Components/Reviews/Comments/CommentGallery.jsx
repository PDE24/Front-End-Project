import axios from "axios";
import { useEffect, useState } from "react";

export default function CommentGallery({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pde-games.herokuapp.com/api/reviews/${id}/comments`)
      .then((res) => {
        setComments(res.data.comments);
      });
  });

  return <p>comment gallery</p>;
}
