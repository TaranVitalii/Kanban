import { updateColumnId } from "../../services/cards";
import { successAction, failureAction } from "../types";
import { UPDATE_CARD_COLUMN, UPDATE_CARDS } from "../constants";

export default store => next => action => {
  if (action.type === UPDATE_CARD_COLUMN) {
    console.log(action);
    const { cardId, newColumnId, token } = action.payload;
    updateColumnId(cardId, newColumnId, token)
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
      .catch(error => {
        store.dispatch({
          type: failureAction(UPDATE_CARD_COLUMN),
          error
        });
      });
  } else {
    return next(action);
  }
};
