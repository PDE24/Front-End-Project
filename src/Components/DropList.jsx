import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropList(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="menu"
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div>
        <h3 className="menu-title">{props.children[0]}</h3>
      </div>
      {isOpen && <div className="menu-options">
        <Link to='/' className="option">ALL REVIEWS</Link>
        {props.children[1]}</div>}
    </section>
  );
}
