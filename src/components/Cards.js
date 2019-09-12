import React from "react";
import "./cards.css";

const Cards = props => {
  let { cards, columnId } = props;
  const { cardsToDo, cardsInProgress, cardsDone } = splitCardsOnState(cards);
  if (columnId === 0) {
    const allCardsForColumn = cardsToDo.map(card => (
      <div className="card" id={card._id} key={card._id}>
        <div className={"text"}>{card.title}</div>
        <i className="fas fa-trash-alt" />
      </div>
    ));
    return allCardsForColumn;
  } else if (columnId === 1) {
    const allCardsForColumn = cardsInProgress.map(card => (
      <div className="card" id={card._id} key={card._id}>
        <div className={"text"}>{card.title}</div>
        <i className="fas fa-trash-alt" />
      </div>
    ));
    return allCardsForColumn;
  } else if (columnId === 2) {
    const allCardsForColumn = cardsDone.map(card => (
      <div className="card" id={card._id} key={card._id}>
        <div className={"text"}>{card.title}</div>
        <i className="fas fa-trash-alt" />
      </div>
    ));
    return allCardsForColumn;
  }
};
export default Cards;

function splitCardsOnState(cards) {
  let cardsToDo = [];
  let cardsInProgress = [];
  let cardsDone = [];
  cards.forEach(card =>
    card.column === 0
      ? cardsToDo.push(card)
      : card.column === 1
      ? cardsInProgress.push(card)
      : card.column === 2
      ? cardsDone.push(card)
      : console.log(`${card} uncorect group`)
  );
  return { cardsToDo, cardsInProgress, cardsDone };
}
