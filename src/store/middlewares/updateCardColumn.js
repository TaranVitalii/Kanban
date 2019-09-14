import { updateCard } from "../../services/cards";
import { successAction, failureAction } from "../types";
import { UPDATE_CARD_TITLE, UPDATE_CARDS } from "../constants";

export default store => next => action => {
  if (action.type === UPDATE_CARD_TITLE) {
    const { cardId, newText, token } = action.payload;
    updateCard(cardId, newText, token)
      .then(card => {
        const cards = store.getState().cards.data;
        const updateCards = cards.map(item =>
          item._id === card.data._id ? card.data : item
        );
        store.dispatch({
          type: successAction(UPDATE_CARDS),
          payload: updateCards
        });
      })
      .catch(error =>
        store.dispatch({
          type: failureAction(UPDATE_CARD_TITLE),
          error
        })
      );
  } else {
    return next(action);
  }
};
