import { addCard } from "../../services/cards";
import { successAction, failureAction } from "../types";
import { ADD_CARD, UPDATE_CARDS } from "../constants";

export default store => next => action => {
  if (action.type === ADD_CARD) {
    addCard(action.payload)
      .then(card => {
        const { cards } = store.getState();
        let newCard = card.data;
        let allCards = cards.data;
        const updateCards = [...allCards, newCard];
        store.dispatch({
          type: successAction(UPDATE_CARDS),
          payload: updateCards
        });
      })
      .catch(error =>
        store.dispatch({
          type: failureAction(ADD_CARD),
          error
        })
      );
  } else {
    return next(action);
  }
};
