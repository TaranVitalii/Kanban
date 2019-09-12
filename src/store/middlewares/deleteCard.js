import { deleteCard } from "../../services/cards";
import { successAction, failureAction } from "../types";
import { DELETE_CARD, UPDATE_CARDS } from "../constants";

export default store => next => action => {
  if (action.type === DELETE_CARD) {
    console.log(action.payload);
    deleteCard(action.payload)
      .then(card => {
        const cards = store.getState().cards.data;
        const updateCards = cards.filter(elem => elem._id !== card.data._id);
        console.log(updateCards);
        store.dispatch({
          type: successAction(UPDATE_CARDS),
          payload: updateCards
        });
      })
      .catch(error =>
        store.dispatch({
          type: failureAction(DELETE_CARD),
          error
        })
      );
  } else {
    return next(action);
  }
};
