import React from "react";
import "./cards.css";

const Cards = ({ card, removeCard, updateCardTitle, onBlur, dragStart }) => {
  return (
    <div
      className="card"
      id={card._id}
      key={card._id}
      draggable={true}
      onDragStart={dragStart}
    >
      <div className="text">{card.title}</div>
      <input
        className="inputFields"
        onBlur={onBlur}
        onKeyDown={updateCardTitle}
      />
      <i className="fas fa-trash-alt" onClick={removeCard} />
    </div>
  );
};

export default Cards;
