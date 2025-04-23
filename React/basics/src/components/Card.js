import React, { useState } from "react";
import ItemDate from "./ItemDate";
import Item from "./Item";
import "./Card.css";

const Card = ({ itemName, month, day, year }) => {
  const [nirma, setNirma] = useState(itemName);

  function clickHandler() {
    console.log("clicked");

    if (nirma === itemName) {
      setNirma("maggi");
    } else {
      setNirma(itemName);
    }
  }
  return (
    <div className="nirma">
      <div>
        <ItemDate month={month} day={day} year={year} />
      </div>

      <div className="panel2">
        <div>
          <Item itemName={nirma} />
        </div>
        <div>
          <button onClick={clickHandler}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
