export function splitCardsOnState(cards) {
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
