import React from "react";
import "./cards.css";

function Cards(props) {
  let { data } = props;
  const cardsArray = data.map(element => (
    <div className="card" id={element._id} key={element._id}>
      <div className={"text"}>{element.title}</div>
      <i className="fas fa-trash-alt" />
    </div>
  ));

  return <div className="cards container">{cardsArray}</div>;
}

export default Cards;
