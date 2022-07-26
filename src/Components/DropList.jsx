import { useState } from "react";

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
        <h3>{props.children[0]}</h3>
      </div>
      {isOpen && <div className="menu-options">{props.children[1]}</div>}
    </section>
  );
}
