import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DropList from "./DropList";

export default function FilterBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://pde-games.herokuapp.com/api/categories").then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <div className="filter-bar">
      <DropList>
        Category ▾
        {categories.map((category) => {
          return (
            <Link to={`/reviews/${category.slug}`} key={category.slug}>
              <div className="option">{category.slug.toUpperCase()}</div>
            </Link>
          );
        })}
      </DropList> 
    </div>
  );
}
